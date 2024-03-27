const { Schema, model } = require("../connection");

const SchoolReviewsSchema = new Schema({
  name: String,
  comment:String,
  rating: String,
});
module.exports = model("SchoolReviews", SchoolReviewsSchema);
