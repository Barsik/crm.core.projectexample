using AutoMapper;
using Columbus.GoldApple.Crm.Domain.Commands.Email.Transactional;
using Columbus.GoldApple.Crm.Domain.Entities;
using Columbus.GoldApple.Crm.Domain.Repositories;
using Columbus.GoldApple.Crm.Domain.Services.Email;
using Columbus.GoldApple.Crm.Domain.Services.Entities;
using Columbus.GoldApple.Crm.Infrastructure;
using Columbus.GoldApple.Crm.Infrastructure.Repositories;
using Columbus.GoldApple.Crm.Infrastructure.Services.Entities;
using Columbus.GoldApple.Mandrill.Infrastructure;
using Columbus.InnerSource.Core.Commands;
using Columbus.InnerSource.Core.Crm.Domain.Repositories;
using Columbus.InnerSource.Infrastructure.Microsoft.Crm.Repositories;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.ServiceModel.Description;

namespace Columbus.GoldApple.Crm.TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var services = new ServiceCollection();

            services.AddScoped(provider =>
            {
                var clientCredentials = new ClientCredentials();
                clientCredentials.UserName.UserName = @"GA\prokudin_k";
                clientCredentials.UserName.Password = "fUZar7VWCx";
                var proxy = new OrganizationServiceProxy(
                    new Uri("https://crmtest.goldapple.ru/XRMServices/2011/Organization.svc"), null, clientCredentials, null);
                return (IOrganizationService)proxy;
            });

            services.AddScoped<ICommandBus, CommandBus>();
            services.AddScoped<IOrganizationCrmRepository, OrganizationCrmRepository>();

            services.AddScoped<IEmailTemplateRepository, EmailTemplateRepository>();
            services.AddScoped<IConfigRepository, ConfigRepository>();
            services.Scan(scan =>
                scan.FromAssembliesOf(typeof(Locator), typeof(DynamicsCrmRepository<>))
                    .AddClasses(classes =>
                        classes.AssignableToAny(
                            typeof(IDynamicsCrmRepository<>),
                            typeof(ICommandHandler<>),
                            typeof(ICommandHandlerAsync<>)))
                    .AsImplementedInterfaces()
                    .WithScopedLifetime());

            services.AddScoped<IEmailTemplateRepository, EmailTemplateRepository>();
            services.AddScoped<IActivityPartyService, ActivityPartyService>();
            services.AddScoped<ITransactionalEmailService>(p =>
            {
                var mapper = p.GetService<IMapper>();
                var configRepository = p.GetService<IConfigRepository>();
                var mandrillApiKey = configRepository.GetConfig().MandrillApiKey;
                return new MandrillEmailService(mandrillApiKey);
            });

            var resolver = services.BuildServiceProvider();

            var organizationService = resolver.GetService<IOrganizationService>();

            var entity = organizationService.Retrieve("cmb_email", new Guid("{D57308DB-394F-EA11-A243-005056B401F3}"), new ColumnSet(true));
            //var request = new OrganizationRequest(ActionName.Transactional_Email_Sync_Templates);
            //var response = organizationService.Execute(request);

            var commandBus = resolver.GetService<ICommandBus>();
            var result = commandBus.SendAsync(new TransactionalEmailMessageSendCommand(entity.ToEntity<Email>())).Result;

            Console.WriteLine("Ready.");
            Console.ReadKey();
        }
    }
}
