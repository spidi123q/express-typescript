"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../config/logger");
/** Returns general error message */
exports.errorResponse = (res, error, message = 'error', errCode = 500, next) => {
    logger_1.logger.error(error);
    console.log(error);
    console.log(error.name);
    console.log(error.stack);
    let msg = 'An error occured: ';
    if (error.message) {
        msg = message + error.message;
    }
    const responseData = {
        message: msg,
        error: error
    };
    if (next !== undefined) {
        next(responseData);
    }
    else {
        res.status(errCode).send(responseData);
    }
};
/** Returns general success message */
exports.successResponse = (res, succData, message = 'Success!', next) => {
    //console.log(succData);
    if (succData.stack) {
        exports.errorResponse(res, succData, 'Server Error: ');
    }
    else {
        const responseData = {
            message: message,
            data: succData
        };
        if (next !== undefined) {
            next(responseData);
        }
        else {
            res.status(200).send(responseData);
        }
    }
};
//# sourceMappingURL=default-response.js.map