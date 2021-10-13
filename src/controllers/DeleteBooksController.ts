import { ResponseBuilder } from "../http/ResponseBuilder";
import {
  ApiContext,
  ApiEvent,
  ApiPromiseHandler
} from "../interfaces/ApiHandlerInterfaces";
import { ApiResponse, HTTP_NO_CONTENT } from "../interfaces/ApiResponseInterfaces";
import { DeleteBookService } from "../services/DeleteBookService";

class DeleteBooksController {
  public handler: ApiPromiseHandler = async (
    event: ApiEvent,
    context: ApiContext
  ): Promise<ApiResponse> => {
    const id: string = event.pathParameters["id"];
    const listUserService = new DeleteBookService();
    const books = await listUserService.delete(id);

    return <ApiResponse>ResponseBuilder.jsonResponse("", HTTP_NO_CONTENT);
  };
}

export { DeleteBooksController };
