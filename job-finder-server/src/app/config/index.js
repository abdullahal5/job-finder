const dotenv = require("dotenv")
const path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};

module.exports = config