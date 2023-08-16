const customer = {
  name: "John Doe",
  balance: 1000,

  deposit: function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${this.name} deposited Rs. ${amount}`);
      this.displayBalance();
    } else {
      console.log("Invalid deposit amount");
    }
  },

  withdraw: function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.name} withdrew Rs. ${amount}`);
      this.displayBalance();
    } else {
      console.log("Insufficient balance or invalid withdrawal amount");
    }
  },

  displayBalance: function() {
    console.log(`${this.name}'s current balance: Rs. ${this.balance}`);
  }
};

// Example usage
customer.deposit(500);
customer.withdraw(200);
