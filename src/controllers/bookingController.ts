import { Response, Request } from 'express';
import { Path, Accept, GET, PathParam } from 'typescript-rest';
import { ApiResponse } from '../interfaces/ApiResponse';

@Path("/booking")
export default class BookingController {
   
    @Path("/:userId/books/:bookId")
    @GET
    getUserBook(@PathParam("userId") userId: number, @PathParam("bookId") bookId: number): ApiResponse<boolean> {
       const response: ApiResponse<boolean> = {
          message: 'success',
          data: false
       }
      return response
   }
}
