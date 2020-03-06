// Assignment Code

// Get object used to show the password
var generateBtn = document.querySelector("#generate");

// Set variables for each criteria
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!#$%&'()*+,-./:;<=>?@^[\\]^_`{|}~";
var numbers = "0123456789";

// Set conditions for each user inputs
var useuppercase = "n";
var uselowercase = "n";
var usesymbols = "n";
var usenumbers = "n";

// Password needs to be global
// var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(
  numofchars,
  useuppercase,
  uselowercase,
  usenumbers,
  usesymbols
) {
  var charCount = 0;
  var loadPassword = "";
  while (charCount <= numofchars) {
    if (useuppercase == "y") {
      var addchar = uppercase[Math.floor(Math.random() * uppercase.length)];
      console.log("addchar: ", addchar);
      loadPassword = loadPassword.concat(addchar);
      console.log("loadPassword: ", loadPassword);
      charCount++;
    }
  }
  // console.log(loadPassword);
  return loadPassword;
}

function pomptForMessage(msg, msgType) {
  // Set loop variable
  var promptAnswer = "";

  // Keep user in loop until a valid response
  var oktocontinue = "n";
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
