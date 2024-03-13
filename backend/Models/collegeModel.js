const { Schema, model } = require("../connection");

const collegeSchema = new Schema({
  cname: String,
  title:String,
  caddress: String,
  cdetail:String,
  courses:Array,
  phone: String,
  image: String,
  email:String,
  fees:String,
});
module.exports = model("college",collegeSchema);
