import { getBookRepository } from "../database/Database";

class ListBookService {
  async getList(id: string) {
    return (await getBookRepository()).findOne(id);
  }
}

export { ListBookService };
