// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value using reduce().
const originalTotal = cart.reduce((total, product) => total + product.price, 0);

let discountedTotal = 0;

console.log("Dynamic Discount Evaluator");
console.log("---------------------------");

// Apply category-wise discounts using a loop and conditionals.
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10; // 10% discount
    } else if (product.category === "fashion") {
        discountRate = 0.05; // 5% discount
    }

    const discountAmount = product.price * discountRate;
    const finalPrice = product.price - discountAmount;
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original Rs.${product.price}, ` +
        `Discount Rs.${discountAmount.toFixed(2)}, ` +
        `Final Rs.${finalPrice.toFixed(2)}`
    );
}

// Apply an additional 5% discount if the original cart value is above Rs.50,000.
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
    discountedTotal -= extraDiscount;
}

// Display the final bill.
console.log("Original Cart Total: Rs." + originalTotal.toFixed(2));
console.log("Extra 5% Discount: Rs." + extraDiscount.toFixed(2));
console.log("Final Cart Total: Rs." + discountedTotal.toFixed(2));
