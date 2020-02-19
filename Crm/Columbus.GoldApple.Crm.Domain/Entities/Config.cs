using System;
using System.Globalization;
using System.Runtime.Serialization;
using Columbus.InnerSource.Core.Crm.Domain;
using Columbus.InnerSource.Core.Crm.Domain.Entities.Enums;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;

namespace Columbus.GoldApple.Crm.Domain.Entities
{
    [DataContract(Name = "Entity", Namespace = "http://schemas.microsoft.com/xrm/2011/Contracts")]
    [EntityLogicalName(EntityLogicalName)]
    public class Config : AggregateRoot
    {
        public const string EntityLogicalName = "cmb_config";

        public Config() : base(EntityLogicalName)
        {
            
        }

        [AttributeLogicalName(FieldNames.Id)]
        public new Guid Id
        {
            get => GetAttributeValue<Guid>(FieldNames.Id);
            set => SetAttributeValue(FieldNames.Id, (base.Id = value));
        }

        [AttributeLogicalName(FieldNames.Name)]
        public string Name
        {
            get => GetAttributeValue<string>(FieldNames.Name);
            set => SetAttributeValue(FieldNames.Name, value);
        }
        [AttributeLogicalName(FieldNames.MandrillApiKey)]
        public string MandrillApiKey
        {
            get => GetAttributeValue<string>(FieldNames.MandrillApiKey);
            set => SetAttributeValue(FieldNames.MandrillApiKey, value);
        }

        [AttributeLogicalName(FieldNames.StateCode)]
        public DefaultStateCode? StateCode
        {
            get => GetOptionSetValue<DefaultStateCode>(FieldNames.StateCode);
            set => SetOptionSetValue(FieldNames.StateCode, value);
        }

        public struct FieldNames
        {
            public const string Id = "cmb_configid";
            public const string Name = "cmb_name";
            public const string MandrillApiKey = "cmb_mandrill_apikey";
            public const string StateCode = "statecode";
        }
    }
}
