using Columbus.GoldApple.Crm.Domain.Entities;
using Columbus.GoldApple.Crm.Domain.Repositories;
using Columbus.InnerSource.Core.Crm.Domain.Repositories;
using System;
using Microsoft.Xrm.Sdk.Query;

namespace Columbus.GoldApple.Crm.Infrastructure.Repositories
{
    public class EmailTemplateRepository : IEmailTemplateRepository
    {
        private readonly IOrganizationCrmRepository _organizationCrmRepository;

        public EmailTemplateRepository(IOrganizationCrmRepository organizationCrmRepository)
        {
            _organizationCrmRepository = organizationCrmRepository;
        }
        public EmailTemplate GetEmailTemplateWithMergeTags(Guid emailTemplateId)
        {
            return
                _organizationCrmRepository.Retrieve<EmailTemplate>(
                    emailTemplateId,
                    new ColumnSet(true),
                    (
                        EmailTemplate.RelationshipNames.MergeTags, new QueryExpression(MergeTag.EntityLogicalName)
                            { ColumnSet = new ColumnSet(true) }
                    ));
        }
    }
}
