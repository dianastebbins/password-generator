// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  
}

var pwLength = 0;
var PW_MIN = 8;
var PW_MAX = 128;
var allowLower = false;
var allowUpper = false;
var allowNumeric = false;
var allowSpecial = false;

function getCriteriaMinMax(){
  while(pwLength < PW_MIN || pwLength > PW_MAX){
    pwLength = prompt(`Enter a password length (8 to 128 characters): `);
    
    // at least 8 characters and no more than 128 characters
    if(pwLength < PW_MIN || pwLength > PW_MAX){
      confirm(`Length must be at least 8 and no more than 128 characters. Try again.`);
    }
  }

}

function getCriteriaCharType(){
  // choose lowercase, uppercase, numeric, and/or special characters
  while(!allowLower && !allowUpper && !allowNumeric && !allowSpecial){ 
    allowLower = confirm(`Shall password contain lowercase letter characters?`);
    allowUpper = confirm(`Shall password contain uppercase letter characters?`);
    allowNumeric = confirm(`Shall password contain numeric characters?`);
    allowSpecial = confirm(`Shall password contain special characters?`);
  
    // input should be validated and at least one character type should be selected
    if(!allowLower && !allowUpper && !allowNumeric && !allowSpecial){
      confirm(`Give me something to work with...try again.`);
    }
  }
  
}

function getCriteria(){
  getCriteriaMinMax();
  getCriteriaCharType();  
}

function clearCriteria(){
  pwLength = 0;
  allowLower = false;
  allowUpper = false;
  allowNumeric = false;
  allowSpecial = false;
}

var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericOptions = "0123456789";
var specialOptions = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // "\

function generatePassword() {
  clearCriteria();
  getCriteria();

  // build string representing all allowed options
  var allowedOptions = "";
  if(allowLower) allowedOptions += lowerCaseOptions;
  if(allowUpper) allowedOptions += upperCaseOptions;
  if(allowNumeric) allowedOptions += numericOptions;
  if(allowSpecial) allowedOptions += specialOptions;
  console.log(`allowedOptions is ${allowedOptions}`);

  var newPassword = "";
  var multiplier = allowedOptions.length;
  for (let i = 0; i < pwLength; i++) {
    var num = Math.random() * multiplier;
    var index = Math.floor(num);
    // console.log(`random is ${index}`);

    newPassword += allowedOptions.charAt(index);
    console.log(newPassword);
  }
  
  // return generated password
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
