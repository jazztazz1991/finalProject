const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const PORT = process.env.PORT || 3001;

const index = require("./routes/index");
const api = require("./routes/api/index");
const users = require("./routes/api/users");
const houses = require("./routes/api/houses");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(require("express-session")({
    secret: 'random strings here are good',
    resave: false,
    saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets
//app.use(express.static(__dirname, "client", "build"));
app.use(express.static(__dirname + '/public'));
// Add routes, both API and view
app.use("/",index);
app.use("/api",api);
app.use("/api/users",users);
app.use("/api/houses",houses);


const User = require("./models/user");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/propertymanagement",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
