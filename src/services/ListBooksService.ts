import { getBookRepository } from "../database/Database";

class ListBooksService {
  async getList() {
    return (await getBookRepository()).find();
  }
}

export { ListBooksService };
