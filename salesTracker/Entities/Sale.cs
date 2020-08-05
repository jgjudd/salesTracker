using System;
namespace salesTracker.Entities
{
    public class Sale
    {
        public int SaleID { get; set; }
        public string Product { get; set; }
        public string SalesPerson { get; set; }
        public string Customer { get; set; }
        public DateTime Date { get; set; }
    }
}
