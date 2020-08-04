using System;
namespace salesTracker.Entities
{
    public class Product
    {
        public string FirstName { get; set; }
        public string Manufacturer { get; set; }
        public string Style { get; set; }
        public float PurchasePrice { get; set; }
        public float SalesPrice { get; set; }
        public int Quantity { get; set; }
        public decimal CommissionPercentage { get; set; }
    }
}
