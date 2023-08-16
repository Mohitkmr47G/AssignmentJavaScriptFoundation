function capitalizeFirstLetter(name) {
  const firstLetter = name.charAt(0);
  const modifiedName = firstLetter.toLowerCase() === firstLetter
    ? firstLetter.toUpperCase() + name.slice(1)
    : name;

  return modifiedName;
}

// Example usage
const userName = prompt("Enter your name:");
const modifiedUserName = capitalizeFirstLetter(userName);
console.log(`Modified name: ${modifiedUserName}`);
