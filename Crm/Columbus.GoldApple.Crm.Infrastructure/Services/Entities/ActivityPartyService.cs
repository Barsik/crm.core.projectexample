using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Columbus.GoldApple.Crm.Domain.Entities;
using Columbus.GoldApple.Crm.Domain.Services.Entities;
using Columbus.InnerSource.Core.Crm.Domain.Repositories;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace Columbus.GoldApple.Crm.Infrastructure.Services.Entities
{
    public class ActivityPartyService : IActivityPartyService
    {
        private readonly IOrganizationCrmRepository _organizationCrmRepository;

        public ActivityPartyService(IOrganizationCrmRepository organizationCrmRepository)
        {
            _organizationCrmRepository = organizationCrmRepository;
        }

        public string GetRecipientEmail(Entity party)
        {
            if (party != null)
            {
                switch (party.LogicalName)
                {
                    case Contact.EntityLogicalName:
                        return ((Contact)party).EmailAddress1;
                    case Lead.EntityLogicalName:
                        return ((Lead)party).EmailAddress1;
                    default:
                        return null;
                }
            }

            return null;
        }

        public Entity GetRecipient(ActivityParty party)
        {
            if (party?.PartyId != null)
            {
                switch (party.PartyId.LogicalName)
                {
                    case Contact.EntityLogicalName:
                        return _organizationCrmRepository.Get<Contact>(party.PartyId.Id, new ColumnSet(true));
                    case Lead.EntityLogicalName:
                        return _organizationCrmRepository.Get<Lead>(party.PartyId.Id, new ColumnSet(true));
                    default:
                        return null;
                }
            }

            return null;
        }
    }
}
