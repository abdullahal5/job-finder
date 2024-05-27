const express = require("express");
const cors = require("cors");
const connection = require("./server");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome, Job Finders !!!");
});

const server = async (app) => {
  await connection(app);
};

server(app);

module.exports = app;
