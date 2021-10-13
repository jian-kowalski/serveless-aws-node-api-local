
import { Book } from "../entities/Book";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Book)
class BooksRepository extends Repository<Book> {}

export { BooksRepository };
