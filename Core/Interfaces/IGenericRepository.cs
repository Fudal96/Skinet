
using Core.Entities;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> GeByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
    }
}