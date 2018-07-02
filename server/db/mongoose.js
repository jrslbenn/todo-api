const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// Local db
mongoose.connect("mongodb://localhost:27017/TodoApp");
// remote db
//mongoose.connect("mongodb://user:password1@ds018538.mlab.com:18538/todo");

module.exports = {mongoose};
