const SendResponse = (res, data) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

module.exports = SendResponse;
