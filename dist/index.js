"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const route_1 = require("./routes/route");
const settings_1 = require("./config/settings");
//import { validateFirebaseIdToken } from './routes/validator/firebase';
const serviceAccount = require("./config/vastbus-9e398-firebase-adminsdk-p8eh6-f71e49c1ff.json");
const cors = require("cors");
/* admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}); */
const port = process.env.PORT || 90900;
/** Application class: Main class of the server  */
class App {
    /** Application start/main method, set server settings and start listening for requests  */
    constructor() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*'); // TODO: Change this in config file to lock down
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Expires');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader('Accept', 'application/json');
            next();
        });
        this.app.listen(port, (err) => {
            if (err) {
                return console.log(err);
            }
            return console.log(`server is listening on ${port}`);
        });
        /** Configure routes throughout the REST API which are defined in route.ts file */
        this.app.use(cors());
        this.app.use(route_1.appRouter);
        //connect db
        settings_1.mongooseConnect();
    }
}
exports.default = new App().app;
//# sourceMappingURL=index.js.map