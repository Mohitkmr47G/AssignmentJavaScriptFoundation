const randomNumber = (() => {
  return Math.floor(Math.random() * 100) + 1;
})();

console.log(`Generated random number: ${randomNumber}`);
