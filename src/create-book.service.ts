import { Injectable } from "@nestjs/common";
import { BookRepository } from "./book.repository";

export interface Book {
    id: number;
    title: string;
    author: string;
    publictionYear: number;
    isbn: string;
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
}

interface CreateBookServiceRequest {
    title: string;
    author: string;
    publictionYear: number;
    isbn: string;
}

type CreateBookServiceResponse = {
    book: Book;
}

@Injectable()
export class CreateBookService {
    constructor(private bookRepository: BookRepository) { }

    async execute({
        title,
        author,
        publictionYear,
        isbn,
    }: CreateBookServiceRequest): Promise<CreateBookServiceResponse> {
        const book = {
            title,
            author,
            publictionYear,
            isbn,
        }

        const newBook = await this.bookRepository.create(book);

        return {
            book: {
                id: newBook.id,
                title,
                author,
                publictionYear,
                isbn,
                createdAt: newBook.createdAt,
                updatedAt: newBook.updatedAt,
            }
        }
    }
}