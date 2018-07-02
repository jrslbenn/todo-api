const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect( "mongodb://user:password1@ds018538.mlab.com:18538/todo" || "mongodb://localhost:27017/TodoApp");

module.exports = {mongoose};
