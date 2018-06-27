const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((res) => {
  //   console.log(res);
  // });

  // deleteOne
  // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });


  // deleteMany
  // db.collection("Users").deleteMany({name: "James"}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection("Users").findOneAndDelete({
  //   _id: new ObjectID("5b33e08134d9060b63a8460d")
  // }).then((res) => {
  //   console.log(res);
  // });
  // db.close();

});
