using Microsoft.EntityFrameworkCore;
using salesTracker.Entities;

namespace salesTracker
{
    public class SalesTrackerDBContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<SalesPerson> SalesPeople { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public DbSet<Discount> Discounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=salestracker.db");
    }
}
