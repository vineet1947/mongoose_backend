const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
 // log to console for dev
 let error = { ...err };
 error.message = err.message;

 console.log(error);

 if (err.name === 'CastError') {
  const message = `Resource Not Found with the id of ${err.value}`;
  error = new ErrorResponse(message, 404);
 }

 //  const statusCode = err.statusCode || 500;
 if (err.code == 11000) {
  const message = 'Duplicate Field Value';
  error = new ErrorResponse(message, 400);
 }
 res
  .status(error.statusCode)
  .json({ success: false, error: error.message || 'Server Error' });
};
module.exports = errorHandler;
