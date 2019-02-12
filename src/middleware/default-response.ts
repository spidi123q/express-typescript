import { Response } from 'express';
import { logger } from '../config/logger';

/** Returns general error message */
export const errorResponse = (res: Response, error: Error, message: string = 'error', errCode: number = 500, next?) => {
    logger.error(error);
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
    } else {
        res.status(errCode).send(responseData);
    }
};

/** Returns general success message */
export const successResponse = (res: Response, succData: any, message: string = 'Success!', next?) => {
    //console.log(succData);
    if (succData.stack) {
        errorResponse(res, succData, 'Server Error: ');
    } else {
        const responseData = {
            message: message,
            data: succData
        };
        if (next !== undefined) {
            next(responseData);
        } else {
            res.status(200).send(responseData);
        }
    }
};
