using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Columbus.InnerSource.Core.Domain.Exceptions;

namespace Columbus.GoldApple.Crm.Domain.Exceptions.Email
{
    public class TransactionalEmailMessageSendException : DomainException
    {
        public TransactionalEmailMessageSendException(string message, Exception exception) : base(message, exception)
        {

        }
    }
}
