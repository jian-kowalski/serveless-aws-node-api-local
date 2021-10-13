import "reflect-metadata";
import { CreateBookController } from "./controllers/CreateBookController";
import { ApiPromiseHandler } from "./interfaces/ApiHandlerInterfaces";
import { ListBooksController } from "./controllers/ListBooksController";
import { ListBookController } from "./controllers/ListBookController";
import { DeleteBooksController } from "./controllers/DeleteBooksController";

const createBookController = new CreateBookController();
const listBooksController = new ListBooksController();
const listBookController = new ListBookController();
const deleteBookController = new DeleteBooksController();

export const createBook: ApiPromiseHandler = createBookController.handler;
export const listBooks: ApiPromiseHandler = listBooksController.handler;
export const listBook: ApiPromiseHandler = listBookController.handler;
export const deleteBook: ApiPromiseHandler = deleteBookController.handler;