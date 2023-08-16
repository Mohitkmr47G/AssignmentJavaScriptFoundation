function doubleQuantities(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
  return cart; // Return the updated cart
}

// Example usage
const customerCart = [1, 2, 3, 4, 5];
const correctedCart = doubleQuantities(customerCart);

console.log("Corrected Cart:", correctedCart);
