const { Schema, model } = require("../connection");

const reviewsSchema = new Schema({
  name: String,
  comment:String,
  rating: String,
});
module.exports = model("reviews", reviewsSchema);
