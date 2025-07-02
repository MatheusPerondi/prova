import { Injectable } from "@nestjs/common";
import { BookRepository } from "./book.repository";

export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  createdAt: string | Date;
  updatedAt?: string | Date | null;
}

type FindAllBooksServiceResponse = {
  books: Book[];
};

@Injectable()
export class FindAllBookService {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<FindAllBooksServiceResponse> {
    const books = await this.bookRepository.findAll();

    return {
      books: books.map(book => ({
        id: book.id!,
        title: book.title,
        author: book.author,
        publictionYear: book.publictionYear,
        isbn: book.isbn,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt ?? undefined,
      })),
    };
  }
}
