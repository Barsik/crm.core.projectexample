using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Columbus.GoldApple.Crm.Domain.Entities;

namespace Columbus.GoldApple.Crm.Domain.Repositories
{
    public interface IEmailTemplateRepository
    {
        EmailTemplate GetEmailTemplateWithMergeTags(Guid emailTemplateId);
    }
}
