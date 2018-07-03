//sha256
// const {SHA256} = require("crypto-js");

// var message = "I am user number 3\n";
// var hash = SHA256(message).toString();
// console.log(message, hash);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log("data was not changed");
// } else {
//   console.log("data was changed");
// }
