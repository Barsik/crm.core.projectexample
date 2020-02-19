using Columbus.InnerSource.Core.Domain.Exceptions;

namespace Columbus.GoldApple.Crm.Domain.Exceptions
{
    public class ConfigNotFoundException : DomainException
    {
        public string ConfigName { get; }

        public ConfigNotFoundException(string configName) : base($"Configuration with name: {configName} not found.")
        {
            ConfigName = configName;
        }
    }
}
