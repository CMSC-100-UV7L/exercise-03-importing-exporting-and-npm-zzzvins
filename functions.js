// Clark Vince Diala
// UV-7L
// Exer 3

// fs package to read and write files
const fs = require('fs');

// uuid package to generate random uuid
const { v4: uuidv4 } = require('uuid');

// validator package for validating string input/s
const validator = require('validator');


// function for generating the unique ID of the user
function generateUniqueID(firstName, lastName) {
    const id = uuidv4().substring(0, 8);
    return `${firstName.toLowerCase()[0]}${lastName.toLowerCase()}${id}`;
  }

// function for adding an account
function addAccount(userData){

    // array with userData contents
    const [firstName, lastName, email, age] = userData;

    // checks if the fields are empty
    if (validator.isEmpty(firstName) || validator.isEmpty(lastName) || validator.isEmpty(email) || !age) {
        console.log('All fields must be present!');
        return false;
      }
    
    // checks if the email is valid, return false if not
    if (!validator.isEmail(email)) {
      console.log('Invalid email address!');
      return false;
      }
    
    // checks if the age is less than 18, return false if not
    if (age < 18) {
        console.log('Must be 18 & above!');
        return false;
      }

    // for generating uniqueID
    const uniqueID = generateUniqueID(firstName, lastName);

    // store details to data
    const data = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

    // append data to the file
    fs.appendFileSync('users.txt', data);

    // returns true, meaning it was saved to the users.txt file
    return true;
}


module.exports = {
    generateUniqueID,
    addAccount,
  };