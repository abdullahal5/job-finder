const { StatusCodes } = require("http-status-codes");

const notFound = (req, res, next) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND !!!",
    error: "",
  });
};

module.exports = notFound;
