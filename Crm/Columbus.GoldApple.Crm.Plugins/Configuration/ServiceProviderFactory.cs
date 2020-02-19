using Columbus.GoldApple.Crm.Domain.Commands.Email.Transactional;
using Columbus.GoldApple.Crm.Domain.Repositories;
using Columbus.GoldApple.Crm.Domain.Services.Email;
using Columbus.GoldApple.Crm.Infrastructure.Handlers.Email.Transactional;
using Columbus.GoldApple.Crm.Infrastructure.Repositories;
using Columbus.GoldApple.Mandrill.Infrastructure;
using Columbus.InnerSource.Core.Commands;
using Columbus.InnerSource.Core.Crm.Domain.Repositories;
using Columbus.InnerSource.Infrastructure.Microsoft.Crm.Repositories;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Xrm.Sdk;
using System;
using Columbus.GoldApple.Crm.Domain.Services.Entities;
using Columbus.GoldApple.Crm.Infrastructure.Services.Entities;

namespace Columbus.GoldApple.Crm.Plugins.Configuration
{
    public static class ServiceProviderFactory
    {
        public static IServiceProvider Build(IServiceProvider crmServiceProvider)
        {
            var services = new ServiceCollection();

            // services.AddScoped(p => MapperFactory.Build(new TransactionalEmailMapping()));

            services.AddScoped<ICommandBus, CommandBus>();

            services.AddScoped<IOrganizationCrmRepository, OrganizationCrmRepository>();
            services.AddScoped<IConfigRepository, ConfigRepository>();

            services.AddScoped(p => crmServiceProvider.GetService<IPluginExecutionContext>());

            services.AddScoped(p => crmServiceProvider.GetService<IOrganizationServiceFactory>());

            services.AddScoped(p =>
                p.GetService<IOrganizationServiceFactory>()
                    .CreateOrganizationService(p.GetService<IPluginExecutionContext>().UserId));

            services.AddScoped<IConfigRepository, ConfigRepository>();
            services.AddScoped<IEmailTemplateRepository, EmailTemplateRepository>();

            services.AddScoped<ICommandHandlerAsync<TransactionalEmailTemplatesSyncCommand>, TransactionalEmailHandler>();
            services.AddScoped<ICommandHandlerAsync<TransactionalEmailMessageSendCommand>, TransactionalEmailHandler>();

            services.AddScoped<IActivityPartyService, ActivityPartyService>();
            services.AddScoped<ITransactionalEmailService>(p =>
            {
                // var mapper = p.GetService<IMapper>();
                var configRepository = p.GetService<IConfigRepository>();
                var mandrillApiKey = configRepository.GetConfig().MandrillApiKey;
                return new MandrillEmailService(mandrillApiKey);
            });

            return services.BuildServiceProvider();
        }
    }
}
