const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const path = require("path");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://expnsetrck-app.onrender.com"],
  })
);
//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
  });
}

server();
