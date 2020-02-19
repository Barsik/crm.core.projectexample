using Columbus.GoldApple.Crm.Domain.Commands.Email.Transactional;
using Columbus.GoldApple.Crm.Domain.Configuration;
using Columbus.InnerSource.Infrastructure.Microsoft.Crm.Plugins;

namespace Columbus.GoldApple.Crm.Plugins.Email.Transactional
{
    [CrmPluginRegistration(
        ActionName.Transactional_Email_Sync_Templates,
        "none",
        StageEnum.PostOperation,
        ExecutionModeEnum.Synchronous,
        "",
        nameof(TransactionalEmailTemplatesSync),
        1,
        IsolationModeEnum.Sandbox)]
    public class TransactionalEmailTemplatesSync : LocalPluginBase
    {
        public override void ExecuteLocal(PluginContext context)
        {
            var result = context.CommandBus.SendAsync((new TransactionalEmailTemplatesSyncCommand())).Result;

            if (!result.Success)
                throw result.Error;
        }
    }
}
