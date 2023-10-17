exports.errorLogging = function errorLogging(err, req, res, next) {
    console.error(err);
    next(err);
}

exports.errorHandler =  function errorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}