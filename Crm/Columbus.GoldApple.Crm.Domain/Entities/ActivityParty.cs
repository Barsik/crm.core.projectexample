using System;
using System.Runtime.Serialization;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;

namespace Columbus.GoldApple.Crm.Domain.Entities
{
    [DataContract(Name = "Entity", Namespace = "http://schemas.microsoft.com/xrm/2011/Contracts")]
    [EntityLogicalName(EntityLogicalName)]
    public class ActivityParty : Entity
    {
        public const string EntityLogicalName = "activityparty";
        public ActivityParty() : base(EntityLogicalName) { }

        [AttributeLogicalName(FieldNames.Id)]
        public new Guid Id
        {
            get => GetAttributeValue<Guid>(FieldNames.Id);
            set => SetAttributeValue(FieldNames.Id, (base.Id = value));
        }

        [AttributeLogicalName(FieldNames.AddressUsed)]
        public string AddressUsed
        {
            get => GetAttributeValue<string>(FieldNames.AddressUsed);
            set => SetAttributeValue(FieldNames.AddressUsed, value);
        }


        [AttributeLogicalName(FieldNames.PartyId)]
        public EntityReference PartyId
        {
            get => GetAttributeValue<EntityReference>(FieldNames.PartyId);
            set => SetAttributeValue(FieldNames.PartyId, value);
        }

        /// <summary>
        /// Типы party
        /// </summary>        
        [AttributeLogicalName(FieldNames.ParticipationTypeMask)]
        public int ParticipationTypeMask
        {
            get => GetAttributeValue<int>(FieldNames.ParticipationTypeMask);
            set => SetAttributeValue(FieldNames.ParticipationTypeMask, value);
        }


        public struct FieldNames
        {
            public const string AddressUsed = "addressused";
            public const string PartyId = "partyid";
            public const string Id = "activityid";
            public const string ParticipationTypeMask = "participationtypemask";
        }

    }
}