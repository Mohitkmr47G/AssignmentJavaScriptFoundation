function calculateRentalCost(daysRented, carType) {
  let rentalCostPerDay;

  switch (carType.toLowerCase()) {
    case 'economy':
      rentalCostPerDay = 4000;
      break;
    case 'midsize':
      rentalCostPerDay = 10000;
      break;
    case 'luxury':
      rentalCostPerDay = 20000;
      break;
    default:
      console.log('Invalid car type');
      return;
  }

  const totalRentalCost = rentalCostPerDay * daysRented;
  return totalRentalCost;
}

// Example usage
const daysRented = 5;
const carType = 'midsize';

const rentalCost = calculateRentalCost(daysRented, carType);
console.log(`Total rental cost: Rs. ${rentalCost}/-`);

