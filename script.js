// Assignment Code
// Creating a variable that targets the button id generate on the html page//
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //creating a function caled Passwordlength
  var passwordLength = prompt("what is the length you want?");

  //length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password length dose not meet requirments");
    console.log("password requirements met")
    return
  } 

  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("would you like to add lowercase character?")
  var uppercase = confirm("would you like to add uppercase character?")
  var number = confirm("Would you like to add a number?")
  var specialCharacter = confirm("would you like to add a special character?")

}

// Write password to the #password input
function writePassword() {
  //creates variable password with function called generatePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//setting value to passsword
  passwordText.value = password;
  
}

function chooseOk(){
  var chooseOk = prompt("Please enter a number");

  if(number=== chooseOk){
    alert("you have added a number to your password")
  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword ,);
console.log("button clicked")

generateBtn.addEventListener("click",chooseOk ,)

