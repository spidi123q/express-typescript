import { Response, Request } from 'express';
import { successResponse } from '../middleware/default-response';
import { errorResponse } from './../middleware/default-response';

export const bookHotel = async (req: Request, res: Response) => {
    try {
        let data = req.body;
        data.userId = req['user']['uid']
        let result = ''//await bookingService.bookHotel(data);
        successResponse(res, result);
    } catch (err) {
        errorResponse(res, err);
    }
}