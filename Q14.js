const calculateTotalCost = cart => cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);

// Example usage
const customerCart = [
  { unitPrice: 10, quantity: 3 },
  { unitPrice: 15, quantity: 2 },
  { unitPrice: 5, quantity: 7 }
];

const totalCost = calculateTotalCost(customerCart);
console.log(`Total cost of items: $${totalCost}`);
