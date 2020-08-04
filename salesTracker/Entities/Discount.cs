using System;
namespace salesTracker.Entities
{
    public class Discount
    {
        public string Product { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal DiscountPercentage { get; set; }
    }
}
