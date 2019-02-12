"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
/** Logger object */
exports.logger = winston.createLogger({
    transports: [
        new (winston.transports.File)({
            filename: 'server-error.log'
        }),
        new winston.transports.Console()
    ]
});
