using AutoMapper;

namespace Columbus.GoldApple.AutoMapper.Infrastructure
{
    public static class MapperFactory
    {
        public static IMapper Build(params Profile[] profiles)
        {
            var config = new MapperConfiguration(cfg =>
            {
                if (profiles != null)
                {
                    cfg.AddProfiles(profiles);
                }
            });
            return config.CreateMapper();
        }
    }
}
