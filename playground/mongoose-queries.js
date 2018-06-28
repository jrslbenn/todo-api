const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

var todoId = "5b3421db7e268876010282e9";
var userId = "5b3407fd1865434606a0cc90";
// if (!ObjectID.isValid(id)) {
//   console.log("Your id is not valid");
// }
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log("Todos", todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log("Todo", todo);
// // });
//
// Todo.findById(todoId).then((todo) => {
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log("todo by id", todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(userId).then((user) => {
  if (!user) {
    return console.log("User not found");
  }
  console.log("user by id", user);
}).catch((e) => {
    console.log(e);
});
