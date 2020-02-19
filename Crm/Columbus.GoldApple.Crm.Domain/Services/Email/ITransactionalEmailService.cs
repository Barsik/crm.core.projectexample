using Columbus.InnerSource.Core.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace Columbus.GoldApple.Crm.Domain.Services.Email
{
    public interface ITransactionalEmailService : IDomainService
    {
        Task<IEnumerable<EmailTemplateDto>> GetTemplates();
        
        Task<IEnumerable<EmailResultDto>> SendEmail(EmailMessageDto message);
    }
}
