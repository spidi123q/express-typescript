import express from 'express';
import { Express } from 'express'
import BodyParser from 'body-parser';
import { Server, Path, GET, PathParam } from "typescript-rest";

import { mongooseConnect } from './config/settings';
//import { validateFirebaseIdToken } from './routes/validator/firebase';
const serviceAccount = require("./config/vastbus-9e398-firebase-adminsdk-p8eh6-f71e49c1ff");
import cors from 'cors';

/* admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}); */


const port = process.env.PORT || 9090;

/** Application class: Main class of the server  */
class App {
  public app: Express;

  /** Application start/main method, set server settings and start listening for requests  */
  constructor() {
    this.app = express();
    this.app.use(BodyParser.urlencoded({ extended: false }));
    this.app.use(BodyParser.json());

    /** Configure routes throughout the REST API which are defined in route.ts file */
    this.app.use(cors())

    //connect db
    mongooseConnect()

    Server.loadServices(this.app, 'controllers/*', __dirname);
    Server.swagger(this.app, {
      endpoint: 'swagger',
      filePath: 'dist/swagger.yaml',
    });

    this.app.listen(port, (err) => {
      if (err) {
        return console.log(err);
      }
      return console.log(`server is listening on ${port}`);
    });
  }

}

export default new App().app;