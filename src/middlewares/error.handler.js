const { ValidationError } = require("sequelize");

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

exports.sequelizeErrorHandler = function(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            success: false,
            errors: err.errors
        })
    }

    next(err);
}