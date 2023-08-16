function countVowels(name) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Example usage
const userName = prompt("Enter your name:");
const numberOfVowels = countVowels(userName);
console.log(`Number of vowels in the name: ${numberOfVowels}`);
