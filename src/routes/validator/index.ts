import * as Joi from 'joi';

export const validator =  {
    screen: {
        body: {
            name: Joi.string().required(),
            seatInfo: Joi.object().required()
        }
    },
    reserve: {
        body: {
            seats: Joi.object().required()
        }
    }
}