const { flights } = require("../models/Flight.js");

const flight = (app) => {
  app.post("/available-flight", async (req, res) => {
    try {
      const { title, time, price, date } = req.body;
      if (title === "" || time === "" || price === "" || date === "") {
        return res.send(202);
      }
      let postedFlight = new flights({ title, time, price, date });

      const capturedFlight = await postedFlight.save();

      res.send(capturedFlight);
    } catch (err) {
      res.sendStatus(404);
    }
  });

  app.get("/get-flight/", async (req, res) => {
    try {
      const availableFlight = await flights.find();

      res.send(availableFlight);
    } catch (error) {
      res.send(404);
    }
  });

  app.get("/get-single-flight/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const foundFlight = await flights.findOne({ _id: `${id}` });

      res.send(foundFlight);
    } catch (err) {
      res.send(404);
    }
  });

  app.put("/update-flight/:id", async (req, res) => {
    const { id } = req.params;
    const { title, time, price, date } = req.body;
    try {
      const foundFlight = await flights.findOneAndUpdate(
        { _id: `${id}` },
        { title, time, price, date }
      );
      res.send(foundFlight);
    } catch (err) {
      res.send(501);
    }
  });

  app.delete("/remove-flight/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const removedFlight = await flights.deleteOne({ _id: id });

      res.send(removedFlight);
    } catch (err) {
      res.send(501);
    }
  });
};

module.exports = { flight };
