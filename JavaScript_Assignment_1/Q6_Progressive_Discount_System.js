// Q6: Progressive Discount System
// Apply a discount based on the original purchase amount.

const totalPurchase = 7500; // Replace with another test amount.
let discountRate;

if (totalPurchase >= 10000) {
    discountRate = 25;
} else if (totalPurchase >= 5000) {
    discountRate = 15;
} else if (totalPurchase >= 2000) {
    discountRate = 5;
} else {
    discountRate = 0;
}

const discountAmount = totalPurchase * (discountRate / 100);
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log(`Original total: ₹${Math.round(totalPurchase)}`);
console.log(`Discount percentage: ${discountRate}%`);
console.log(`Discount amount: ₹${Math.round(discountAmount)}`);
console.log(`Final price after discount: ₹${finalPrice}`);
