function calculateTotalBill(dishCosts, numberOfPeople) {
  const totalCost = dishCosts.reduce((sum, cost) => sum + cost, 0);
  const billPerPerson = totalCost / numberOfPeople;

  return {
    totalBill: totalCost,
    billPerPerson: billPerPerson
  };
}

// Example usage
const dishCosts = [250, 350, 180, 120];
const numberOfPeople = 4;

const billDetails = calculateTotalBill(dishCosts, numberOfPeople);
console.log(`Total bill: Rs. ${billDetails.totalBill}/-`);
console.log(`Bill per person: Rs. ${billDetails.billPerPerson.toFixed(2)}/-`);
