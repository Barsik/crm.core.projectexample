using Columbus.GoldApple.Crm.Plugins.Configuration;
using Columbus.InnerSource.Infrastructure.Microsoft.Crm.Plugins;
using System;

namespace Columbus.GoldApple.Crm.Plugins
{
    public abstract class LocalPluginBase : PluginBase
    {
        public override void Execute(PluginContext context)
        {
            ExecuteLocal(context);
        }

        public override IServiceProvider CreateResolver(IServiceProvider crmServiceProvider)
        {
            return ServiceProviderFactory.Build(crmServiceProvider);
        }

        public abstract void ExecuteLocal(PluginContext context);
    }
}
