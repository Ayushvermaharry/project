const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    res.status(err.status || 500).send({ error: err.message });
  };
  
  module.exports = errorHandler;
  