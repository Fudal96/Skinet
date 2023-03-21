

using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(src => src.ProductBrand.Name))
                .ForMember(d => d.ProductType, o => o.MapFrom(src => src.ProductType.Name));
        }
    }
}