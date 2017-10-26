const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


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
    imagesrc: "../../images/house5.jpg",
    about:
      'This houses biggest selling point is the view from the wall size windows put along the entire length off the house.',
    aboutlong: "Welcome to your personal retreat with an amazing view of the surrounding woods and lakefront.  Walk into your new house and forget your cares as you take in the view with a gallery of windows.  You will feel like you never went inside with wood flooring and amazing sunlit living space.  With sliding glass doors that disappear when open to connect to your own personal lakefront oasis.  With an amazing kitchen and living space open to the outdoors you will want to enjoy this home and share the serenity with your friends and family.Walk into the spacious bedrooms all with windows open to the woods around you and a master with a private balcony overlooking the lake.  Enjoy your personal dock where you can park your boat or jet ski.",
    date: new Date(Date.now())
  },
  {
    name: "Modern Style",
    address: "123 internet st",
    imagesrc: "../../images/house4.jpg",
    about:
      'This houses biggest selling point is the very modern approach to the architecture of the home and the sleek clean lines it contains.',
      aboutlong: "Welcome to your Modern oasis.  At first glance you will be wowed by this home’s upgraded features.  When you enter the home you will notice the modern lighting and décor.  This home is wired for your comfort and convenience.  The control of the house is at your fingertips, with your own phone or tablet you can control virtually any aspect of this home.  If your water is not hot enough simply change your water heater temperature.  If you are too hot change your thermostat settings.  Want more light simply change your brightness or color settings.Never worry about security with the touch of a button, arm or disarm you alarm remotely, forget to lock your doors or close the garage no problem just click the lock button to secure the house.  Check on your security cameras at any point or have alerts sent to you.You will enjoy the modern comforts and simplicity of this home.",
    date: new Date(Date.now())
  }
  
];

const userSeed = [
  {
    username: "Lanugginoso",
    password: "fakepass"
  },
  
];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
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

