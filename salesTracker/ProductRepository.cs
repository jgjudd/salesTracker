using System.Collections.Generic;
using System.Linq;

namespace salesTracker.Entities
{
    public class ProductRepository
    {
        public List<Product> GetAllProducts()
        {
            using (SalesTrackerDBContext context = new SalesTrackerDBContext())
            {
                return context.Products.ToList();       
            }
        }

        public int AddProduct(Product newProduct)
        {
            int itemIndex;
            using (SalesTrackerDBContext context = new SalesTrackerDBContext())
            {
                context.Products.Add(newProduct);
                context.SaveChanges();
                itemIndex = context.Products.ToList().IndexOf(newProduct);
            }
            return itemIndex;
        }
    }
}
