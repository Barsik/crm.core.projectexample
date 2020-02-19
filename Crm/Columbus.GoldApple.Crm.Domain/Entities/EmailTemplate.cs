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
    public class EmailTemplate : AggregateRoot
    {
        public const string EntityLogicalName = "cmb_emailtemplate";

        public EmailTemplate() : base(EntityLogicalName)
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
        [AttributeLogicalName(FieldNames.Content)]
        public string Content
        {
            get => GetAttributeValue<string>(FieldNames.Content);
            set => SetAttributeValue(FieldNames.Content, value);
        }

        [AttributeLogicalName(FieldNames.ExternalId)]
        public string ExternalId
        {
            get => GetAttributeValue<string>(FieldNames.ExternalId);
            set => SetAttributeValue(FieldNames.ExternalId, value);
        }

        [AttributeLogicalName(FieldNames.FromAddress)]
        public string FromAddress
        {
            get => GetAttributeValue<string>(FieldNames.FromAddress);
            set => SetAttributeValue(FieldNames.FromAddress, value);
        }

        [AttributeLogicalName(FieldNames.FromName)]
        public string FromName
        {
            get => GetAttributeValue<string>(FieldNames.FromName);
            set => SetAttributeValue(FieldNames.FromName, value);
        }

        [AttributeLogicalName(FieldNames.LastSyncDate)]
        public DateTime? LastSyncDate
        {
            get => GetAttributeValue<DateTime?>(FieldNames.LastSyncDate);
            set => SetAttributeValue(FieldNames.LastSyncDate, value);
        }

        [AttributeLogicalName(FieldNames.SourceCode)]
        public SourceCode? SourceCode
        {
            get => GetOptionSetValue<SourceCode>(FieldNames.SourceCode);
            set => SetOptionSetValue(FieldNames.SourceCode, value);
        }

        [AttributeLogicalName(FieldNames.Subject)]
        public string Subject
        {
            get => GetAttributeValue<string>(FieldNames.Subject);
            set => SetAttributeValue(FieldNames.Subject, value);
        }

        [AttributeLogicalName(FieldNames.LinkPreview)]
        public string LinkPreview
        {
            get => GetAttributeValue<string>(FieldNames.LinkPreview);
            set => SetAttributeValue(FieldNames.LinkPreview, value);
        }

        [AttributeLogicalName(FieldNames.StateCode)]
        public DefaultStateCode? StateCode
        {
            get => GetOptionSetValue<DefaultStateCode>(FieldNames.StateCode);
            set => SetOptionSetValue(FieldNames.StateCode, value);
        }

        [RelationshipSchemaName(RelationshipNames.MergeTags)]
        public IEnumerable<MergeTag> MergeTags => GetRelatedEntities<MergeTag>(RelationshipNames.MergeTags, null);
        #endregion

        #region Fields
        public struct FieldNames
        {
            public const string Id = "cmb_emailtemplateid";
            public const string Content = "cmb_content";
            public const string Name = "cmb_name";
            public const string ExternalId = "cmb_externalid";
            public const string FromAddress = "cmb_fromaddress";
            public const string FromName = "cmb_fromname";
            public const string LastSyncDate = "cmb_lastsyncdate";
            public const string SourceCode = "cmb_sourcecode";
            public const string Subject = "cmb_subject";
            public const string LinkPreview = "cmb_linkpreview";
            public const string StateCode = "statecode";
        }

        public struct RelationshipNames
        {
            public const string MergeTags = "cmb_emailtemplate_mergetag";
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
