using System;
using Columbus.InnerSource.Core.Commands;

namespace Columbus.GoldApple.Crm.Domain.Commands.Email.Transactional
{
    using CrmEmail = Entities.Email;
    public class TransactionalEmailMessageSendCommand : Command
    {
        public CrmEmail Email { get; }

        public TransactionalEmailMessageSendCommand(CrmEmail email)
        {
            Email = email;
        }
    }
}
