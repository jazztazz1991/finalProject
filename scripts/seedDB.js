const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/propertymanagement",
  {
    useMongoClient: true
  }
);

const houseSeed = [
  {
    name: "Scenic View",
    address: "123 internet st",
    image: "../images/house5.jpg",
    synopsis:
      'This houses biggest selling point is the view from the wall size windows put along the entire length off the house.',
    date: new Date(Date.now())
  },
  {
    name: "Modern Style",
    address: "123 internet st",
    image: "../images/house4.jpg",
    synopsis:
      'This houses biggest selling point is the very modern approach to the architecture of the home and the sleek clean lines it contains.',
    date: new Date(Date.now())
  }
  
];

db.House
  .remove({})
  .then(() => db.House.collection.insertMany(houseSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
