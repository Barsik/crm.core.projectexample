using System.Threading.Tasks;
using Columbus.GoldApple.Crm.Domain.Commands.Email.Transactional;
using Columbus.GoldApple.Crm.Domain.Configuration;
using Columbus.InnerSource.Infrastructure.Microsoft.Crm.Plugins;
using Microsoft.IdentityModel.Protocols.WSFederation.Metadata;
using Microsoft.Xrm.Sdk;

namespace Columbus.GoldApple.Crm.Plugins.Email.Transactional
{
    using CrmEmail = Domain.Entities.Email;
    [CrmPluginRegistration(
        MessageNameEnum.Create,
        Domain.Entities.Email.EntityLogicalName,
        StageEnum.PreOperation,
        ExecutionModeEnum.Synchronous,
        CrmEmail.FieldNames.StatusCode,
        nameof(TransactionalEmailMessageSend) + "Create",
        1,
        IsolationModeEnum.Sandbox)]
    [CrmPluginRegistration(
        MessageNameEnum.Update,
        Domain.Entities.Email.EntityLogicalName,
        StageEnum.PreOperation,
        ExecutionModeEnum.Synchronous,
        CrmEmail.FieldNames.StatusCode,
        nameof(TransactionalEmailMessageSend) + "Update",
        1,
        IsolationModeEnum.Sandbox,
        Image1Type = ImageTypeEnum.PreImage,
        Image1Name = PluginContext.PreImageName,
        Image1Attributes = CrmEmail.FieldNames.Id + "," + CrmEmail.FieldNames.EmailTemplateId + "," + CrmEmail.FieldNames.To)]
    public class TransactionalEmailMessageSend : LocalPluginBase
    {
        public override void ExecuteLocal(PluginContext context)
        {
            var emailTarget = context.GetTarget<CrmEmail>();

            if (context.PreIamge != null)
            {
                var emailPreImage = context.GetPreImage<CrmEmail>();
                emailTarget.Merge(emailPreImage, false);
            }

            if (emailTarget.StatusCode == CrmEmail.EmailStatusCode.Send)
            {
                var result = context.CommandBus.SendAsync((new TransactionalEmailMessageSendCommand(emailTarget))).Result;
            }
        }
    }
}
