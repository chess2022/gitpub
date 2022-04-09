// Setup dependencies

require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const drinks = require("./models/drinks.js");

// Declare middleware
app.use(express.static("public"));

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

// Setup listener

app.listen(PORT, () => {
  console.log(`We are listening on port Deltron ${PORT}`);
});
