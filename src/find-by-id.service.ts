import { Injectable } from "@nestjs/common";
import { BookRepository } from "./book.repository";

export interface Book {
  id: number;
  title: string; 
}

interface FindBookByIdRequest {
  id: number;
}

interface FindBookByIdResponse {
  book: Book[];
}

@Injectable()
export class FindBookByIdService {
  constructor(private bookRepository: BookRepository) {}

  async execute({ id }: FindBookByIdRequest): Promise<FindBookByIdResponse> {
    const book = await this.bookRepository.fidnById(id);

    if (!book) {
      return { book: [] };
    }

    return {
      book: [
        {
          id: book.id,
          title: book.title,
        },
      ],
    };
  }
}
