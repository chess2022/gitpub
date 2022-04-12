// Setup dependencies

require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const drinks = require("./models/drinks.js");
const food = require("./models/food");

// Declare middleware
app.use("/static", express.static("public"));

// Declare routes and routers

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Gitpub App!</h1>`);
});

// Index route - show all of the drinks
app.get("/drinks/", (req, res) => {
  res.render("index.ejs", { allDrinks: drinks });
});

// show route - show a specific drink
app.get("/drinks/:id", (req, res) => {
  res.render("show.ejs", { drink: drinks[req.params.id] });
});

// Index route - show all of the food
app.get("/food/", (req, res) => {
  res.render("food_index.ejs", { allFood: food });
});

// show route - show a specific food item
app.get("/food/:id", (req, res) => {
  res.render("food_show.ejs", { foodItem: food[req.params.id] });
});


// Setup listener

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
