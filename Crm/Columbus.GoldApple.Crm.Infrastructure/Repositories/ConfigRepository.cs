using Columbus.GoldApple.Crm.Domain.Entities;
using Columbus.GoldApple.Crm.Domain.Repositories;
using Columbus.InnerSource.Core.Crm.Domain.Repositories;
using Microsoft.Xrm.Sdk.Query;

namespace Columbus.GoldApple.Crm.Infrastructure.Repositories
{
    public class ConfigRepository : IConfigRepository
    {
        private readonly IOrganizationCrmRepository _organizationCrmRepository;

        public ConfigRepository(IOrganizationCrmRepository organizationCrmRepository)
        {
            _organizationCrmRepository = organizationCrmRepository;
        }

        public Config GetConfig()
        {
            // TODO First or Select by name?
            // TODO filter by statecode?
            return _organizationCrmRepository.First<Config>(new ColumnSet(true));
        }
    }
}
