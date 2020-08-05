using System;
using System.Collections.Generic;
using salesTracker.Entities;

namespace salesTracker
{
    public class TestProduct
    {
        public static List<Product> TestProducts = new List<Product>()
        {
            new Product(null, "Larry", "Enticer", "Snowmobile", 123, 121, 1, 0.2f),
            new Product(null, "Harry", "Enticer", "Snowmobile", 567, 122, 2, 0.1f),
            new Product(null, "Barry", "Enticer", "Snowmobile", 1054, 135, 3, 0.2f)
        };
    }
}
