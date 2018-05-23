using Microsoft.EntityFrameworkCore;

namespace restauranter.Models{
    public class RestfulContext : DbContext{
        public RestfulContext(DbContextOptions<RestfulContext> options) : base(options) {}
        public DbSet<Review> Reviews { get; set; }
    }
}