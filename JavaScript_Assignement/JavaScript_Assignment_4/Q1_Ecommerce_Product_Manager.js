// Q1: E-Commerce Product Manager (Classes + Objects)
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }
        this.price -= this.price * (percent / 100);
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Category: ${this.category} | Price: Rs.${this.price.toFixed(2)}`;
    }
}

// Create multiple product objects and store them in an array.
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1800, "Electronics"),
    new Product(3, "Notebook", 120, "Stationery"),
    new Product(4, "Smartphone", 22000, "Electronics")
];

// Apply a 10% discount to the headphones.
products[1].applyDiscount(10);

console.log("ALL PRODUCTS");
products.forEach(product => console.log(product.getDetails()));

// Display products whose price is greater than Rs.1000.
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nPRODUCTS WITH PRICE ABOVE Rs.1000");
expensiveProducts.forEach(product => console.log(product.getDetails()));
