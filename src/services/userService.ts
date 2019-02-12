
import { UserModel } from '../models/user';

export const setUser  = async (userId) => {
         const result = await UserModel.countDocuments({userId})
         if(result > 0) {
             return false;
         } else {
            UserModel.create({userId})
            return true;
         }
}

export const getUser = async (userId)=> {
    return await UserModel.findOne({userId})
}