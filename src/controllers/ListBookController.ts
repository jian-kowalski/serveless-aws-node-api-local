import { ListBookService } from "../services/ListBookService";
import { ResponseBuilder } from "../http/ResponseBuilder";
import {
  ApiContext,
  ApiEvent,
  ApiPromiseHandler,
} from "../interfaces/ApiHandlerInterfaces";
import { ApiResponse, HTTP_OK } from "../interfaces/ApiResponseInterfaces";

class ListBookController {
  public handler: ApiPromiseHandler = async (
    event: ApiEvent,
    context: ApiContext
  ): Promise<ApiResponse> => {
    const id: string = event.pathParameters["id"];

    const listUserService = new ListBookService();
    const book = await listUserService.getBook(id);

    return <ApiResponse>ResponseBuilder.jsonResponse(book, HTTP_OK);
  };
}

export { ListBookController };
