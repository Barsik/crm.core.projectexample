using Columbus.InnerSource.Core.Domain;
using System;

namespace Columbus.GoldApple.Crm.Domain.Services.Email
{
    public class EmailTemplateDto : ValueObject<EmailTemplateDto>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        public string Html { get; set; }
        public string FromEmail { get; set; }
        public string FromName { get; set; }
        public DateTime CreatedAt { get; set; }

        protected override bool EqualsCore(EmailTemplateDto other)
        {
            return Id == other.Id;
        }

        protected override int GetHashCodeCore()
        {
            return Id.GetHashCode();
        }
    }
}
