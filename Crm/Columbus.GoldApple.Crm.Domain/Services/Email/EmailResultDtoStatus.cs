using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Columbus.GoldApple.Crm.Domain.Services.Email
{
    public enum EmailResultDtoStatus
    {
        Sent = 1,
        Queued = 2,
        Error = 3
    }
}
