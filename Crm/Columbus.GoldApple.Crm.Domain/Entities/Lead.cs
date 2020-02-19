using System;
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
    public class Lead : AggregateRoot
    {
        public const string EntityLogicalName = "lead";

        public Lead() : base(EntityLogicalName)
        {

        }

        #region Properties
        [AttributeLogicalName(FieldNames.Id)]
        public new Guid Id
        {
            get => GetAttributeValue<Guid>(FieldNames.Id);
            set => SetAttributeValue(FieldNames.Id, (base.Id = value));
        }

        [AttributeLogicalName(FieldNames.EmailAddress1)]
        public string EmailAddress1
        {
            get => GetAttributeValue<string>(FieldNames.EmailAddress1);
            set => SetAttributeValue(FieldNames.EmailAddress1, value);
        }

        #endregion

        #region Fields
        public struct FieldNames
        {
            public const string Id = "lead";
            public const string EmailAddress1 = "emailaddress1";
        }
        #endregion

        #region Functions

        #endregion
    }
}
