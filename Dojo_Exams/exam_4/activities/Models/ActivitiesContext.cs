using Microsoft.EntityFrameworkCore;

namespace activities.Models{
    public class ActivitiesContext : DbContext{
        public ActivitiesContext(DbContextOptions<ActivitiesContext> options) : base(options) {}
        public DbSet<User> Users { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<GuestList> GuestLists { get; set; }
    }
}