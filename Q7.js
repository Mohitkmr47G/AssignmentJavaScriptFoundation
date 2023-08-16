class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    const existingItem = this.items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  removeItem(item) {
    const itemIndex = this.items.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      if (this.items[itemIndex].quantity > 1) {
        this.items[itemIndex].quantity--;
      } else {
        this.items.splice(itemIndex, 1);
      }
    }
  }

  getCartItems() {
    return this.items;
  }
}

// Example usage
const cart = new ShoppingCart();

const item1 = { id: 1, name: "Product A", price: 10 };
const item2 = { id: 2, name: "Product B", price: 15 };

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item1);

console.log(cart.getCartItems());
