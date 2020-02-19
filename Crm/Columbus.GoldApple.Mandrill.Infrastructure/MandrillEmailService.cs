using Columbus.GoldApple.Crm.Domain.Services.Email;
using Columbus.GoldApple.Mandrill.Infrastructure.Extensions;
using Mandrill;
using Mandrill.Models;
using Mandrill.Requests.Messages;
using Mandrill.Requests.Templates;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Columbus.GoldApple.Mandrill.Infrastructure
{
    public class MandrillEmailService : ITransactionalEmailService
    {
        private readonly MandrillApi _api;
        public MandrillEmailService(string apiKey)
        {
            _api = new MandrillApi(apiKey);
        }

        public async Task<IEnumerable<EmailTemplateDto>> GetTemplates()
        {
            var mandrillTemplates = await _api.ListTemplates(new ListTemplatesRequest());

            return mandrillTemplates.Select(t => new EmailTemplateDto()
            {
                Id = t.Slug,
                Name = t.Name,
                FromEmail = t.FromEmail,
                FromName = t.FromName,
                Html = t.Code,
                Subject = t.Subject,
                CreatedAt = t.Created
            });
        }

        public async Task<IEnumerable<EmailResultDto>> SendEmail(EmailMessageDto messageDto)
        {

            var message = new EmailMessage()
            {
                FromName = messageDto.FromName,
                FromEmail = messageDto.FromEmail,
                To = messageDto.To.Select(e => new EmailAddress(e)),
                Subject = messageDto.Subject
            };


            var request = new SendMessageTemplateRequest(message, messageDto.TemplateId);

            var result = await _api.SendMessageTemplate(request);

            return result.Select((i => new EmailResultDto()
            {
                Email = i.Email,
                Id = i.Id,
                ErrorReason = i.RejectReason,
                Status = i.Status.MapToDtoStatus()
            }
            ));
        }
    }
}
