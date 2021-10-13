import { ResponseBuilder } from "../http/ResponseBuilder";
import { ApiContext, ApiEvent, ApiPromiseHandler } from "../interfaces/ApiHandlerInterfaces";
import { ApiResponse, HTTP_OK } from "../interfaces/ApiResponseInterfaces";
import { ListBooksService } from "../services/ListBooksService";

class ListBooksController {
    public handler: ApiPromiseHandler = async (
      event: ApiEvent,
      context: ApiContext
    ): Promise<ApiResponse> => {
        const listUserService = new ListBooksService();
        const books = await listUserService.getList();
  
      return <ApiResponse>ResponseBuilder.jsonResponse( books , HTTP_OK);
    };
  }
  

export { ListBooksController }