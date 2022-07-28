const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const { flight } = require('./routes/flightRoute')
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));
app.use(json());
app.use(cors())
flight(app)
// app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
