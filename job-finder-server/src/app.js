const express = require("express");
const cors = require("cors");
const connection = require("./server");
const globalErrorHandler = require("./app/middlewares/globalErrorHandler");
const notFound = require("./app/middlewares/notFound");
const router = require("./app/modules/jobs/jobs.routes");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome, Job Finders !!!");
});

// router
app.use("/api/v1/job", router);

const server = async (app) => {
  await connection(app);
};

// global error handler
app.use(globalErrorHandler);
// not found
app.use(notFound);

server(app);

module.exports = app;
