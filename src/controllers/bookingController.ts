import { Response, Request } from 'express';
import { Path, Accept, GET, PathParam, Security } from 'typescript-rest';
import { ApiResponse } from '../interfaces/ApiResponse';

@Path("/booking")
export default class BookingController {
   
    @Path("/:userId/books/:bookId")
    @GET
    @Security()
    getUserBook(@PathParam("userId") userId: number, @PathParam("bookId") bookId: number): ApiResponse<boolean> {
       const response: ApiResponse<boolean> = {
          message: 'success',
          data: false
       }
      return response
   }
}
 