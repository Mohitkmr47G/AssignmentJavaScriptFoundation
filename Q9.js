function printDivisibleBy3NotBy2(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    
    if (num % 3 === 0 && num % 2 !== 0) {
      console.log(num);
    }
  }
}

// Example usage
const numberArray = [3, 6, 9, 12, 15, 18, 21];
printDivisibleBy3NotBy2(numberArray);
