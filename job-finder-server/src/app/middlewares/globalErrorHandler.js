const globalErrorHandler = (err, req, res, next) =>{
  let statusCode = 500
  let message = err?.message

  return res.status(statusCode).json({
    message,
    error: err
  })
}

module.exports = globalErrorHandler