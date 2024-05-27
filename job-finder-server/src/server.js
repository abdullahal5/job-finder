const mongoose = require("mongoose");
const config = require("./app/config");
require("dotenv").config();

async function connection(app) {
  try {
    await mongoose.connect(config.database_url, {
      dbName: "Job-Finder-Project"
    });
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connection;
