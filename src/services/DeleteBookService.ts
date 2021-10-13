import { getBookRepository } from "../database/Database";

class DeleteBookService {
  async delete(id: string) {
    return (await getBookRepository()).delete(id);
  }
}

export { DeleteBookService };
