// Assignment Code

// Get object used to show the password
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Set variables for each criteria
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!#$%&'()*+,-./:;<=>?@^[\\]^_`{|}~";
var numbers = "0123456789";

// Set conditions for each user inputs
var numofchars = 0;
var useuppercase = "n";
var uselowercase = "n";
var usesymbols = "n";
var usenumbers = "n";

// Write password to the #password input
function writePassword() {
  var loadpassword = generatePassword();
  passwordText.value = loadpassword;
}

function generatePassword() {
  // Set local variables
  var charCount = 0;
  var password = "";

  // Loop through until we reach the number of characters user requested.
  while (charCount < numofchars) {
    // Check each criteria for use and ensure we have not hit the number of characters user requested.
    if (useuppercase == "y" && charCount < numofchars) {
      password = password.concat(
        uppercase[Math.floor(Math.random() * uppercase.length)]
      );
      charCount++;
    }
    if (uselowercase == "y" && charCount < numofchars) {
      password = password.concat(
        lowercase[Math.floor(Math.random() * lowercase.length)]
      );
      charCount++;
    }
    if (usenumbers == "y" && charCount < numofchars) {
      password = password.concat(
        numbers[Math.floor(Math.random() * numbers.length)]
      );
      charCount++;
    }
    if (usesymbols == "y" && charCount < numofchars) {
      password = password.concat(
        symbols[Math.floor(Math.random() * symbols.length)]
      );
      charCount++;
    }
  }
  return password;
}

function getPrompts() {
  // Prompt user for password specifications
  // Call pomptForMessage passing in the message to prompt and the type of check.
  // Type of check =
  // 1 = Numbers from 8-128
  // 2 = Yes/No prompt

  var msg = "How many characters?";
  numofchars = pomptForMessage(msg, 1);

  var msg = "Use UPPERCASE letters (y/n)?";
  useuppercase = pomptForMessage(msg, 2);

  var msg = "Use lowercase letters (y/n)?";
  uselowercase = pomptForMessage(msg, 2);

  var msg = "Use numbers (y/n)?";
  usenumbers = pomptForMessage(msg, 2);

  var msg = "Use symbols (y/n)?";
  usesymbols = pomptForMessage(msg, 2);
}

// Created prompt for messages to practice call to functions
function pomptForMessage(msg, msgType) {
  // Set local variables
  var oktocontinue = "n";

  // Loop until you get a valid answer
  while (oktocontinue == "n") {
    // Prompt User
    var promptAnswer = prompt(msg);

    // Check message type 1 and validate responses
    if (msgType == 1) {
      if (promptAnswer >= 8 && promptAnswer <= 128) {
        oktocontinue = "y";
      } else {
        alert("Your password length must be greater than 7 and less then 129");
      }
    }

    // Check message type 2 and validate responses
    if (msgType == 2) {
      // set answer to lowercase to allow both upper and lower case response
      promptAnswer = promptAnswer.toLowerCase();

      // Check to make sure user enters a 'y' or 'n'
      if (promptAnswer == "y" || promptAnswer == "n") {
        oktocontinue = "y";
      } else {
        alert("Enter Y for yes or N for no");
        promptAnswer = "";
      }
    }
  }
  return promptAnswer;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
