using System.Collections.Generic;

namespace Columbus.GoldApple.Crm.Domain.Services.Email
{
    public class EmailMessageDto
    {
        public string Subject { get; set; }
        public string FromEmail { get; set; }
        public string FromName { get; set; }
        public bool TrackClicks { get; set; }
        public bool TrackOpens { get; set; }
        public string TemplateId { get; set; }
        public IList<string> To { get; } = new List<string>();
        public IList<EmailMessageVariableDto> Variables { get; } = new List<EmailMessageVariableDto>();
    }
}
