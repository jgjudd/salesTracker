using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace salesTracker.Entities
{
    public class Product : IEnumerable
    {
        public Product(int ProductID, string FirstName, string Manufacturer, string Style, float PurchasePrice, float SalesPrice, int Quantity, decimal CommissionPercentage)
        {
            this.ProductID = ProductID;
            this.FirstName = FirstName;
            this.Manufacturer = Manufacturer;
            this.Style = Style;
            this.PurchasePrice = PurchasePrice;
            this.SalesPrice = SalesPrice;
            this.Quantity = Quantity;
            this.CommissionPercentage = CommissionPercentage;
        }

        [Key]
        public int ProductID { get; set; }
        public string FirstName { get; set; }
        public string Manufacturer { get; set; }
        public string Style { get; set; }
        public float PurchasePrice { get; set; }
        public float SalesPrice { get; set; }
        public int Quantity { get; set; }
        public decimal CommissionPercentage { get; set; }

        public IEnumerator GetEnumerator()
        {
            throw new System.NotImplementedException();
        }
    }
}
