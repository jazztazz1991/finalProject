const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  about: String,
  aboutlong: String,
  imagesrc: String,
  date: { type: Date, default: Date.now }
});

const House = mongoose.model("House", houseSchema);

module.exports = House;
