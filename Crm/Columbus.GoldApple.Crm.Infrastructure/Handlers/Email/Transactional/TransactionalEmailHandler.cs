using Columbus.GoldApple.Crm.Domain.Commands.Email.Transactional;
using Columbus.GoldApple.Crm.Domain.Entities;
using Columbus.GoldApple.Crm.Domain.Services.Email;
using Columbus.InnerSource.Core.Commands;
using Columbus.InnerSource.Core.Crm.Domain.Repositories;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Columbus.GoldApple.Crm.Domain.Entities.Enums;
using Columbus.GoldApple.Crm.Domain.Exceptions;
using Columbus.GoldApple.Crm.Domain.Exceptions.Email;
using Columbus.GoldApple.Crm.Domain.Repositories;
using Columbus.GoldApple.Crm.Domain.Services.Entities;
using Columbus.InnerSource.Core.Domain.Exceptions;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace Columbus.GoldApple.Crm.Infrastructure.Handlers.Email.Transactional
{
    using CrmEmail = Domain.Entities.Email;
    public class TransactionalEmailHandler :
        ICommandHandlerAsync<TransactionalEmailTemplatesSyncCommand>,
        ICommandHandlerAsync<TransactionalEmailMessageSendCommand>
    {
        private readonly IOrganizationCrmRepository _organizationCrmRepository;
        private readonly ITransactionalEmailService _transactionalEmailService;
        private readonly IEmailTemplateRepository _emailTemplateRepository;
        private readonly IActivityPartyService _activityPartyService;
        //private readonly IMapper _mapper;
        public TransactionalEmailHandler(
            IOrganizationCrmRepository organizationCrmRepository,
            ITransactionalEmailService transactionalEmailService,
            IEmailTemplateRepository emailTemplateRepository,
            IActivityPartyService activityPartyService)
        // IMapper mapper)
        {
            _transactionalEmailService = transactionalEmailService;
            _emailTemplateRepository = emailTemplateRepository;
            _activityPartyService = activityPartyService;
            _organizationCrmRepository = organizationCrmRepository;
            //_mapper = mapper;
        }

        public async Task<ICommandResult> HandleAsync(TransactionalEmailTemplatesSyncCommand command, CancellationToken token = new CancellationToken())
        {
            try
            {
                var externalTemplatesCollection = await _transactionalEmailService.GetTemplates();
                var crmTemplatesCollection = _organizationCrmRepository
                    .FindAll<EmailTemplate>(t => t.Id, t => t.ExternalId).Items;

                foreach (var externalTemplate in externalTemplatesCollection)
                {
                    //TODO сделать на ExecuteMultipleRequest
                    var crmTemplate = crmTemplatesCollection.FirstOrDefault(ct => ct.ExternalId == externalTemplate.Id);
                    var crmTargetTemplate = EmailTemplate.CreateFromExternalTransactionalEmailTemplate(externalTemplate);

                    if (crmTemplate == null)
                    {
                        _organizationCrmRepository.Create(crmTargetTemplate);
                    }
                    else
                    {
                        crmTargetTemplate.Id = crmTemplate.Id;
                        _organizationCrmRepository.Update(crmTargetTemplate);
                    }
                }

                return CommandResult.Ok();
            }
            catch (Exception exception)
            {
                return CommandResult.Fail(exception);
            }
        }

        public async Task<ICommandResult> HandleAsync(TransactionalEmailMessageSendCommand command, CancellationToken token = new CancellationToken())
        {
            try
            {
                var email = command.Email;
                if (email == null)
                {
                    throw new ArgumentNullException(nameof(command.Email));
                }
                // если шаблон не заполнен
                if (email.EmailTemplateId == null)
                {
                    throw new DomainException($"Email [{email.Id}] doesn't have email template.");
                }
                // если нет ни одного получателя
                if (email.To?.Count() < 1)
                {
                    throw new DomainException($"Email [{email.Id}] doesn't have any recipients 'to'.");
                }

                var template = _emailTemplateRepository.GetEmailTemplateWithMergeTags(email.EmailTemplateId.Id);

                // смаппить в EmailMessageDto
                var emailMessageDto = new EmailMessageDto()
                {
                    Subject = template.Subject,
                    FromEmail = template.FromAddress,
                    FromName = template.FromName,
                    TemplateId = template.ExternalId,
                    TrackClicks = true,
                    TrackOpens = true
                };

                // берем первого попавшего получателя
                var recipient = _activityPartyService.GetRecipient(email.To.First());
                if (recipient == null)
                {
                    throw new DomainException($"No valid recipient for email [{email?.Id}].");
                }

                var recipientEmail = _activityPartyService.GetRecipientEmail(recipient);
                if (recipientEmail == null)
                {
                    throw new DomainException($"Recipient for email [{email?.Id}] doesn't have email address.");
                }
                emailMessageDto.To.Add(recipientEmail);
                // обработать merge tags

                // получить внешний ид и вернуть
                var results = await _transactionalEmailService.SendEmail(emailMessageDto);

                var resultList = results.ToList();

                if (resultList.Any(r => r.Status == EmailResultDtoStatus.Error))
                {
                    var externalError = string.Join(";", resultList.Select(r => r.ErrorReason));
                    throw new DomainException($"External error reason: {externalError}");
                }

                email.ExternalId = string.Join(";", resultList.Select(r => r.Id));
                email.ExternalStatus = string.Join(";", resultList.Select(r => r.Status));
                email.StateCode = CrmEmail.EmailStateCode.Completed;
                email.StatusCode = CrmEmail.EmailStatusCode.Completed;
                command.Email.ExternalError = string.Empty;
                return CommandResult.Ok();
            }
            catch (Exception exception)
            {
                command.Email.StateCode = CrmEmail.EmailStateCode.Open;
                command.Email.StatusCode = CrmEmail.EmailStatusCode.Error;
                command.Email.ExternalError = exception.ToString();
                return CommandResult.Fail(exception);
            }
        }
    }
}
