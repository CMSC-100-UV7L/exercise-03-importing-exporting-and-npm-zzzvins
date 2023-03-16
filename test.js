const { generateUniqueID, addAccount } = require('./functions');

// Test generateUniqueID() function
const id1 = generateUniqueID('Alan', 'Turing');
console.log(id1);

const id2 = generateUniqueID('Ted', 'Nelson');
console.log(id2);

console.log("\n");
// Test cases using addAccount() function

const userData1 = ['Alan', 'Turing', 'aturing@w3c.com', 58];
const test1 = addAccount(userData1);
console.log(test1); // true
console.log("\n");

const userData2 = ['Clark Vince', 'Diala', 'cdiala@up.edu.ph', 20];
const test2 = addAccount(userData2);
console.log(test2); // true
console.log("\n");

const userData3 = ['', '', 'cdiala@up.edu.ph', 20];
const test3 = addAccount(userData3);
console.log(test3); // empty strings, false
console.log("\n");

const userData4 = ['Naruto', 'Uzumaki', 'naruto@zxc.com', 16];
const test4 = addAccount(userData4);
console.log(test4); // age is < 18, false
console.log("\n");

const userData5 = ['George', 'Washington', 'georgyy.ph', 20];
const test5 = addAccount(userData5);
console.log(test5); // email not valid, false
console.log("\n");

const userData6 = ['Felix', 'Poter', 'fpoter@.com', 20];
const test6 = addAccount(userData6);
console.log(test6); // email not valid, false
console.log("\n");

const userData7 = ['Mark', '', 'vzxc@gqwl.com', 12];
const test7 = addAccount(userData7);
console.log(test7); // last name missing, false
console.log("\n");

const userData8 = ['Liam', 'Styles', '1d@direction.com', 34];
const test8 = addAccount(userData8);
console.log(test8); // true
console.log("\n");
