// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity < 1) {
            throw new Error("Price must be non-negative and quantity must be at least 1.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(couponCode) {
        // Accept coupon codes such as SAVE20 or DISC10.
        const match = /^(SAVE|DISC)(10|20)$/.exec(couponCode);

        if (!match) {
            throw new Error("Invalid coupon. Use SAVE10, SAVE20, DISC10, or DISC20.");
        }

        const discountPercent = Number(match[2]);
        const originalTotal = this.getTotal();
        const discountAmount = originalTotal * (discountPercent / 100);

        return {
            coupon: couponCode,
            discountPercent,
            originalTotal,
            discountAmount,
            finalTotal: originalTotal - discountAmount
        };
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 700, 2);
cart.addItem("USB Cable", 250, 3);

console.log("SHOPPING CART");
cart.items.forEach(item => {
    console.log(`${item.name}: Rs.${item.price} x ${item.quantity}`);
});

console.log("Cart Total: Rs." + cart.getTotal().toFixed(2));

try {
    const bill = cart.applyCoupon("SAVE20");
    console.log(`Coupon: ${bill.coupon}`);
    console.log(`Discount: ${bill.discountPercent}% (Rs.${bill.discountAmount.toFixed(2)})`);
    console.log("Final Total: Rs." + bill.finalTotal.toFixed(2));
} catch (error) {
    console.log("Coupon Error:", error.message);
}
