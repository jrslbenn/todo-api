const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // findOneAndUpdate
  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5b33d47f6b2fe71b180ee1da")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5b33f42a34d9060b63a84646")
  }, {
    $set: {
      name: "James"
    },
    $inc: {
      age:1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

//  db.close();
});
