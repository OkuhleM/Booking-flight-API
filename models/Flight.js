// exports.exampleModel = [];

require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('("I am connected to mongodb")'))
  .catch((err) => console.log(err));
console.log("process.env.MONGO_URI", process.env.MONGO_URI);

const flight = mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },

  time: {
    type: "string",
    required: true,
  },
  price: {
    type: "string",
    required: true
  },
date: {
  type: Date,
 min: "2022-07-28",
 max: "2024-12-29"
}
});
const flights =mongoose.model("flight", flight);
module.exports = {flights}