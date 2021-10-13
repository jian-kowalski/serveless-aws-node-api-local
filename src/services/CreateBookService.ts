import { BooksRepository } from "../repositories/BooksRepository";
import { getBookRepository } from "../database/Database";
export interface IBookRequest {
  name: string;
  date_release: Date;
  author: string;
  category: string;
  amount: number;
  page_number: number;
  created_at: string;
}

class CreateUserService {
  async execute({
    name,
    date_release,
    author,
    category,
    amount,
    page_number,
  }: IBookRequest) {
    const booksRepository: BooksRepository = await getBookRepository();

    await this.validarLivro(name, booksRepository);

    const book = booksRepository.create({
      name,
      date_release,
      author,
      category,
      amount,
      page_number,
    });

    return booksRepository.save(book);
  }

  private async validarLivro(name: string, booksRepository: BooksRepository) {
    if (!name) {
      throw new Error("boook incorrect");
    }

    const bookAlreadyExists = await booksRepository.findOne({ name });

    if (bookAlreadyExists) {
      throw new Error("book already existis");
    }
  }
}

export { CreateUserService };
