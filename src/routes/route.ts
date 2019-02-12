import * as express from 'express';
//import { validateFirebaseIdToken } from './validator/firebase';
import { bookHotel} from '../controllers/bookingController';

class AppRoutes {
    public router;

    constructor() {
        this.router = express.Router();
        //this.router.use(validateFirebaseIdToken)
        //this.router.post('/', validation(screenValidation.validator.screen), addScreen);
        this.router.get('/booking', bookHotel)
    }
}

export let appRouter = new AppRoutes().router;
