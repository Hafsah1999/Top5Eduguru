const { Schema, model } = require("../connection");

const playwayReviewSchema = new Schema({
  name: String,
  comment:String,
  rating: String,
});
module.exports = model("playwayReview", playwayReviewSchema);
