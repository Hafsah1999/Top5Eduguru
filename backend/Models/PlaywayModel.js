const { Schema, model } = require("../connection");

const playwaySchema = new Schema({
  pname: String,
  title:String,
  paddress: String,
  pdetail:String,
  timings:String,
  phone: String,
  image: String,
  email:String,
});
module.exports = model("playway",playwaySchema);
