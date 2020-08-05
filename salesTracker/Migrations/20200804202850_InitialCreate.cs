using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace salesTracker.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerID);
                });

            migrationBuilder.CreateTable(
                name: "Discounts",
                columns: table => new
                {
                    DiscountID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Product = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    DiscountPercentage = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Discounts", x => x.DiscountID);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(nullable: true),
                    Manufacturer = table.Column<string>(nullable: true),
                    Style = table.Column<string>(nullable: true),
                    PurchasePrice = table.Column<float>(nullable: false),
                    SalesPrice = table.Column<float>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    CommissionPercentage = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                });

            migrationBuilder.CreateTable(
                name: "Sales",
                columns: table => new
                {
                    SaleID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Product = table.Column<string>(nullable: true),
                    SalesPerson = table.Column<string>(nullable: true),
                    Customer = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sales", x => x.SaleID);
                });

            migrationBuilder.CreateTable(
                name: "SalesPeople",
                columns: table => new
                {
                    SalesPersonID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false),
                    TerminationDate = table.Column<DateTime>(nullable: true),
                    Manager = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SalesPeople", x => x.SalesPersonID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Discounts");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Sales");

            migrationBuilder.DropTable(
                name: "SalesPeople");
        }
    }
}
