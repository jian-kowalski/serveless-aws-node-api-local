import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { Book } from "../entities/Book";
import { BooksRepository } from "../repositories/BooksRepository";

class Database {
  public async getConnection(): Promise<Connection> {
    const connectionOptions: ConnectionOptions = {
      type: "mysql",
      host: process.env.DB_HOST as string,
      database: process.env.DB_DATABASE as string,
      port: parseInt(process.env.DB_PORT + ""),
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      synchronize: true,
      logging: true,
      entities: [Book],
      migrations: [],
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
