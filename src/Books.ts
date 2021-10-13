import { CreateBookController } from "./controllers/CreateBookController";
import { ApiPromiseHandler } from "./interfaces/ApiHandlerInterfaces";
import "reflect-metadata";

const createBookController = new CreateBookController();

export const create: ApiPromiseHandler = createBookController.handler;
