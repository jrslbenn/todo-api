const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos").find({
  //   _id: new ObjectID('5b33d4a7aad02d1b1c3d2eb9')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  // db.collection("Todos").find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  db.collection("Users").find({
    name: "Mike"
  }).toArray().then((docs) => {
    console.log("Users named Mike:");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch todos", err);
  });

  //db.close();
});
