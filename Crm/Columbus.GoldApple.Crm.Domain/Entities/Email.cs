using System;
using System.Collections.Generic;
using System.Globalization;
using System.Runtime.Serialization;
using Columbus.GoldApple.Crm.Domain.Entities.Enums;
using Columbus.GoldApple.Crm.Domain.Services.Email;
using Columbus.InnerSource.Core.Crm.Domain;
using Columbus.InnerSource.Core.Crm.Domain.Entities.Enums;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;

namespace Columbus.GoldApple.Crm.Domain.Entities
{
    [DataContract(Name = "Entity", Namespace = "http://schemas.microsoft.com/xrm/2011/Contracts")]
    [EntityLogicalName(EntityLogicalName)]
    public class Email : AggregateRoot
    {
        public const string EntityLogicalName = "cmb_email";

        public Email() : base(EntityLogicalName)
        {

        }

        #region Properties
        [AttributeLogicalName(FieldNames.Id)]
        public new Guid Id
        {
            get => GetAttributeValue<Guid>(FieldNames.Id);
            set => SetAttributeValue(FieldNames.Id, (base.Id = value));
        }

        [AttributeLogicalName(FieldNames.Subject)]
        public string Subject
        {
            get => GetAttributeValue<string>(FieldNames.Subject);
            set => SetAttributeValue(FieldNames.Subject, value);
        }
        [AttributeLogicalName(FieldNames.To)]
        public IEnumerable<ActivityParty> To
        {
            get => GetEntityCollection<ActivityParty>(FieldNames.To);
            set => SetEntityCollection(FieldNames.To, value);
        }
        [AttributeLogicalName(FieldNames.Cc)]
        public IEnumerable<ActivityParty> Cc
        {
            get => GetEntityCollection<ActivityParty>(FieldNames.Cc);
            set => SetEntityCollection(FieldNames.Cc, value);
        }
        [AttributeLogicalName(FieldNames.From)]
        public IEnumerable<ActivityParty> From
        {
            get => GetEntityCollection<ActivityParty>(FieldNames.From);
            set => SetEntityCollection(FieldNames.From, value);
        }
        [AttributeLogicalName(FieldNames.RegardingObjectId)]
        public EntityReference RegardingObjectId
        {
            get => GetAttributeValue<EntityReference>(FieldNames.RegardingObjectId);
            set => SetAttributeValue(FieldNames.RegardingObjectId, value);
        }

        [AttributeLogicalName(FieldNames.SourceCode)]
        public SourceCode? SourceCode
        {
            get => GetOptionSetValue<SourceCode>(FieldNames.SourceCode);
            set => SetOptionSetValue(FieldNames.SourceCode, value);
        }

        [AttributeLogicalName(FieldNames.EmailTemplateId)]
        public EntityReference EmailTemplateId
        {
            get => GetAttributeValue<EntityReference>(FieldNames.EmailTemplateId);
            set => SetAttributeValue(FieldNames.EmailTemplateId, value);
        }

        [AttributeLogicalName(FieldNames.HandleBars)]
        public string HandleBars
        {
            get => GetAttributeValue<string>(FieldNames.HandleBars);
            set => SetAttributeValue(FieldNames.HandleBars, value);
        }

        [AttributeLogicalName(FieldNames.ContactId)]
        public EntityReference ContactId
        {
            get => GetAttributeValue<EntityReference>(FieldNames.ContactId);
            set => SetAttributeValue(FieldNames.ContactId, value);
        }
        [AttributeLogicalName(FieldNames.EventId)]
        public EntityReference EventId
        {
            get => GetAttributeValue<EntityReference>(FieldNames.EventId);
            set => SetAttributeValue(FieldNames.EventId, value);
        }

        [AttributeLogicalName(FieldNames.ExternalId)]
        public string ExternalId
        {
            get => GetAttributeValue<string>(FieldNames.ExternalId);
            set => SetAttributeValue(FieldNames.ExternalId, value);
        }

        [AttributeLogicalName(FieldNames.ExternalStatus)]
        public string ExternalStatus
        {
            get => GetAttributeValue<string>(FieldNames.ExternalStatus);
            set => SetAttributeValue(FieldNames.ExternalStatus, value);
        }

        [AttributeLogicalName(FieldNames.ExternalError)]
        public string ExternalError
        {
            get => GetAttributeValue<string>(FieldNames.ExternalError);
            set => SetAttributeValue(FieldNames.ExternalError, value);
        }

        [AttributeLogicalName(FieldNames.StateCode)]
        public EmailStateCode? StateCode
        {
            get => GetOptionSetValue<EmailStateCode>(FieldNames.StateCode);
            set => SetOptionSetValue(FieldNames.StateCode, value);
        }

        [AttributeLogicalName(FieldNames.StatusCode)]
        public EmailStatusCode? StatusCode
        {
            get => GetOptionSetValue<EmailStatusCode>(FieldNames.StatusCode);
            set => SetOptionSetValue(FieldNames.StatusCode, value);
        }
        #endregion

        #region Fields
        public struct FieldNames
        {
            public const string Id = "activityid";
            public const string Subject = "subject";
            public const string To = "to";
            public const string Cc = "cc";
            public const string From = "from";
            public const string RegardingObjectId = "regardingobjectid";
            public const string SourceCode = "cmb_sourcecode";
            public const string EmailTemplateId = "cmb_emailtemplateid";
            public const string HandleBars = "cmb_handlebars";
            public const string ContactId = "cmb_contactid";
            public const string EventId = "cmb_eventid";
            public const string ExternalId = "cmb_externalid";
            public const string ExternalStatus = "cmb_externalstatus";
            public const string ExternalError = "cmb_externalerror";
            public const string StateCode = "statecode";
            public const string StatusCode = "statuscode";
        }

        public enum EmailStateCode
        {
            Open = 0,
            Completed = 1,
            Canceled = 2
        }
        public enum EmailStatusCode
        {
            Created = 1,
            Send = 100_000_000,
            Error = 100_000_001,
            Completed = 2,
            Canceled = 3
        }
        #endregion

        #region Functions

        #endregion
    }
}
