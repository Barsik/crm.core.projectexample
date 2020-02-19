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
    public class MergeTag : AggregateRoot
    {
        public const string EntityLogicalName = "cmb_mergetag";

        public MergeTag() : base(EntityLogicalName)
        {

        }

        #region Properties
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
        [AttributeLogicalName(FieldNames.EntityName)]
        public string EntityName
        {
            get => GetAttributeValue<string>(FieldNames.EntityName);
            set => SetAttributeValue(FieldNames.EntityName, value);
        }
        [AttributeLogicalName(FieldNames.AttributePath)]
        public string AttributePath
        {
            get => GetAttributeValue<string>(FieldNames.AttributePath);
            set => SetAttributeValue(FieldNames.AttributePath, value);
        }
        #endregion

        #region Fields
        public struct FieldNames
        {
            public const string Id = "cmb_mergetagid";
            public const string Name = "cmb_name";
            public const string EntityName = "cmb_entityname";
            public const string AttributePath = "cmb_attributepath";
        }
        #endregion

        #region Functions

        public static EmailTemplate CreateFromExternalTransactionalEmailTemplate(EmailTemplateDto externalEmailTemplate)
        {
            // TODO подумать про маппинг. Automapper через static работает. Опасно
            return new EmailTemplate()
            {
                ExternalId = externalEmailTemplate.Id,
                Content = externalEmailTemplate.Html,
                FromAddress = externalEmailTemplate.FromEmail,
                FromName = externalEmailTemplate.FromName,
                LastSyncDate = DateTime.Now,
                Name = externalEmailTemplate.Name,
                SourceCode = Enums.SourceCode.Mandrill, //TODO в модель должен храниться источник 
                Subject = externalEmailTemplate.Subject,
                // LinkPreview = TODO узнать как формируется url
            };
        }
        #endregion
    }
}
