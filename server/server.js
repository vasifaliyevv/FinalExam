const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const cors = require("cors");
const app = express();
const PORT = 8080;
const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  img: String,
});
const foodModel = mongoose.model("food", foodSchema);
mongoose.set("strictQuery", false);
mongoose
.connect(`mongodb+srv://af201:KlSC1UDnr1vp9XGa@cluster.oyql5cj.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));
const addfoodSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string().required(),
  img: Joi.string().required(),
});
app.use(express.json());
app.use(cors())
app.post(
  "/api/foods",
  (req, res, next) => {
    const { error } = addfoodSchema.validate(req.body);


    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    const newfood = new foodModel({ ...req.body });


    await newfood.save();
    res
      .status(201)
      .send({ message: "Product succesfully added!", product: newfood });
  }
);
app.get("/api/foods", (req, res) => {
  foodModel.find(null, "name price desc img", (error, products) => {
    if (error) return res.status(500).send({ error });
    res.send(products);
  });
});
app.delete("/api/foods/:id", (req, res) => {
  if (req.params.id)
    foodModel.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) return res.status(500).send({ error });


      res.send(data);
    });
});
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
//KlSC1UDnr1vp9XGa

