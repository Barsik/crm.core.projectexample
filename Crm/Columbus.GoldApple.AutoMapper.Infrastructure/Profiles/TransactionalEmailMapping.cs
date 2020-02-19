using AutoMapper;
using Columbus.GoldApple.Crm.Domain.Entities;
using Columbus.GoldApple.Crm.Domain.Services.Email;
using Mandrill.Models;

namespace Columbus.GoldApple.AutoMapper.Infrastructure.Profiles
{
    public class TransactionalEmailMapping : Profile
    {
        public TransactionalEmailMapping()
        {
            CreateMap<string, EmailAddress>()
                .ForMember(d => d.Email,
                    o => o.MapFrom(s => s));

            CreateMap<EmailMessageDto, EmailMessage>();

            CreateMap<EmailTemplate, EmailMessageDto>()
                .ForMember(d => d.TemplateId,
                    o =>
                        o.MapFrom(s => s.ExternalId));

            CreateMap<EmailResult, EmailResultDto>()
                .ForMember(d => d.Status,
                    o =>
                        o.MapFrom(s => s.Status.ToString()));
        }
    }
}
