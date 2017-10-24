const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managementSchema = new Schema({
  title: { type: String, required: true },
  about: String,
  image: String
});

const Management = mongoose.model("Management", managementSchema);

module.exports = Management;