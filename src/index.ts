import dotenv from 'dotenv';
import express from 'express';
import { Express } from 'express';
import BodyParser from 'body-parser';
import FirebaseAdmin from 'firebase-admin';
import {
  Server,
  Path,
  GET,
  PathParam,
  PassportAuthenticator
} from 'typescript-rest';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { mongooseConnect } from './config/settings';
//import { validateFirebaseIdToken } from './routes/validator/firebase';
import cors from 'cors';

/* admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}); */

const result = dotenv.config();
console.log('ENV: ', result.parsed);

/** Application class: Main class of the server  */
class App {
  public app: Express;

  /** Application start/main method, set server settings and start listening for requests  */
  constructor() {
    this.app = express();
    this.app.use(BodyParser.urlencoded({ extended: false }));
    this.app.use(BodyParser.json());

    /** Configure routes throughout the REST API which are defined in route.ts file */
    this.app.use(cors());

    //connect db
    mongooseConnect();

    //init firebase
    FirebaseAdmin;
    const JWT_SECRET: string = 'some-jwt-secret';
    const jwtConfig: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(JWT_SECRET)
    };
    const strategy = new Strategy(
      jwtConfig,
      (payload: any, done: (err: any, user: any) => void) => {
        done(null, payload);
      }
    );
    const authenticator = new PassportAuthenticator(strategy, {
      deserializeUser: (user: string) => JSON.parse(user),
      serializeUser: (user: any) => {
        return JSON.stringify(user);
      }
    });
    Server.registerAuthenticator(authenticator);
    Server.loadServices(this.app, 'controllers/*', __dirname);
    Server.swagger(this.app, {
      endpoint: 'swagger',
      filePath: 'dist/swagger.yaml'
    });
  }
}

const app = new App().app;
export default app;
