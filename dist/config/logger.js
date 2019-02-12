"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const winston = require("winston");
/** Logger object */
exports.logger = winston.createLogger({
    transports: [
        new (winston.transports.File)({
            filename: 'server-error.log'
        }),
        new winston.transports.Console()
    ]
});
//# sourceMappingURL=logger.js.map