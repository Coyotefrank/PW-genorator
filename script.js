// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = prompt("what is the length you want?");

  //length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password lengh...");
    return
  } 

  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("please add lowercase")
  var uppercase = confirm("would you like to add uppercase?")
  var number = confirm("Would you like to add a number?")
  var specialCharacter = confirm("would you like to add a special character?")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

