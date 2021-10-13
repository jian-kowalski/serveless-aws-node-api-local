import { getBookRepository } from "../database/Database";

class ListBookService {
  async getBook(id: string) {
    return (await getBookRepository()).findOne(id);
  }
}

export { ListBookService };
