"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//import { validateFirebaseIdToken } from './validator/firebase';
const bookingController_1 = require("../controllers/bookingController");
class AppRoutes {
    constructor() {
        this.router = express.Router();
        //this.router.use(validateFirebaseIdToken)
        //this.router.post('/', validation(screenValidation.validator.screen), addScreen);
        this.router.post('/booking', bookingController_1.bookHotel);
    }
}
exports.appRouter = new AppRoutes().router;
//# sourceMappingURL=route.js.map