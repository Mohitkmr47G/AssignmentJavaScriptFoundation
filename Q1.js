// Get user input for password and confirmed password
const password = prompt("Enter password:");
const confirmedPassword = prompt("Confirm password:");

// Check if passwords match
if (password === confirmedPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful.");
}
