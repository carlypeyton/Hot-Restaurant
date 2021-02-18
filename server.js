// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create reservation array

let reservations = [
  {
    name: "",
    phone: "",
    email: "",
    uniqueId: "",
  },
  {
    name: "",
    phone: "",
    email: "",
    uniqueId: "",
  },
  {
    name: "",
    phone: "",
    email: "",
    uniqueId: "",
  },
  {
    name: "",
    phone: "",
    email: "",
    uniqueId: "",
  },
  {
    name: "",
    phone: "",
    email: "",
    uniqueId: "",
  },
  {
    name: "",
    phone: "",
    email: "",
    uniqueId: "",
  },
];

// Base routes for moving between our three pages

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));

app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);

app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);

// Returns reservations array

app.get("/api/reservations", (req, res) => res.json(reservations));

app.post("/api/reservations", (req, res) => {
  const newReservation = req.body;

  reservations.push(newReservation);

  res.json(reservations);
}),
  app.delete("/api/reservations", (req, res) => {
    reservations = [];
  });

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
