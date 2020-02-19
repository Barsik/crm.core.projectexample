using Columbus.GoldApple.Crm.Domain.Entities;
using Columbus.InnerSource.Core.Domain;
using Microsoft.Xrm.Sdk;

namespace Columbus.GoldApple.Crm.Domain.Services.Entities
{
    public interface IActivityPartyService : IDomainService<ActivityParty>
    {
        string GetRecipientEmail(Entity party);
        Entity GetRecipient(ActivityParty party);
    }
}
