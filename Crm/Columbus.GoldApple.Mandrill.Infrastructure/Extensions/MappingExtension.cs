using Columbus.GoldApple.Crm.Domain.Services.Email;
using Mandrill.Models;

namespace Columbus.GoldApple.Mandrill.Infrastructure.Extensions
{
    public static class MappingExtension
    {
        // todo AutoMapper. Сейчас не удается скрестить AutoMapper и Crm Sandbox
        public static EmailResultDtoStatus MapToDtoStatus(this EmailResultStatus status)
        {
            switch (status)
            {
                case EmailResultStatus.Sent:
                case EmailResultStatus.Scheduled:
                    return EmailResultDtoStatus.Sent;
                case EmailResultStatus.Queued:
                    return EmailResultDtoStatus.Queued;
                case EmailResultStatus.Invalid:
                case EmailResultStatus.Rejected:
                    return EmailResultDtoStatus.Error;
                default:
                    return EmailResultDtoStatus.Error;
            }
        }
    }
}
