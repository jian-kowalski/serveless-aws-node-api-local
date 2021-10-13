import { Book } from "../entities/Book";
import {
  Connection,
  ConnectionManager,
  ConnectionOptions,
  createConnection,
  getConnectionManager,
} from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";

class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getConnection(): Promise<Connection> {
    const connectionOptions: ConnectionOptions = {
      name: `default`,
      type: `sqlite`,
      database: `src/database/database.sqlite`,
      entities: [Book],
    };

    return createConnection(connectionOptions);
  }
}

export async function getBookRepository(): Promise<BooksRepository> {
  const database = new Database();
  let dbConn = await database.getConnection();
  return dbConn.getCustomRepository(BooksRepository);
}

export { Database };
