using System;
using Columbus.InnerSource.Core.Domain.Exceptions;

namespace Columbus.GoldApple.Crm.Domain.Exceptions
{
    public class EntityWithIdNotFoundException : DomainException
    {
        public string EntityName { get; }
        public Guid Id { get; }

        public EntityWithIdNotFoundException(string entityName, Guid id) : base($"Entity {entityName} with id: {id}.")
        {
            EntityName = entityName;
            Id = id;
        }
    }
}
