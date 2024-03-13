const { Schema, model } = require("../connection");

const schoolSchema = new Schema({
  sname: String,
  title: String,

  saddress: String,
  sdetail:String,
  phone: String,
  image: String,
  email:String,
});
module.exports = model("school",schoolSchema);
