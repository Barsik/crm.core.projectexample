namespace Columbus.GoldApple.Crm.Domain.Services.Email
{
    public class EmailResultDto
    {
        public string Email { get; set; }
        public string Id { get; set; }
        public string ErrorReason { get; set; }
        public EmailResultDtoStatus Status { get; set; }
    }
}