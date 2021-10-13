import { ResponseBuilder } from "../http/ResponseBuilder";
import {
  ApiContext,
  ApiEvent,
  ApiPromiseHandler
} from "../interfaces/ApiHandlerInterfaces";
import { ApiResponse, HTTP_OK } from "../interfaces/ApiResponseInterfaces";
import { CreateUserService, IBookRequest } from "../services/CreateBookService";

class CreateBookController {
  public handler: ApiPromiseHandler = async (
    event: ApiEvent,
    context: ApiContext
  ): Promise<ApiResponse> => {
    const bookRequest: IBookRequest = JSON.parse(event.body);

    const createBookService = new CreateUserService();

    const book = await createBookService.execute(bookRequest);

    return <ApiResponse>ResponseBuilder.jsonResponse( book , HTTP_OK);
  };
}

export { CreateBookController };
