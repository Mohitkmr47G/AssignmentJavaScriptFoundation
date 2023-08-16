function removeDuplicatesFromCart(cart) {
  const cartWithoutDuplicates = [];

  for (const item of cart) {
    const existingItem = cartWithoutDuplicates.find(cartItem => cartItem.id === item.id);
    
    if (!existingItem) {
      cartWithoutDuplicates.push(item);
    }
  }

  return cartWithoutDuplicates;
}

// Example usage
const customerCart = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 15 },
  { id: 1, name: "Product A", price: 10 }, // Duplicate
  { id: 3, name: "Product C", price: 20 },
];

const cartWithoutDuplicates = removeDuplicatesFromCart(customerCart);
console.log("Cart without duplicates:", cartWithoutDuplicates);
