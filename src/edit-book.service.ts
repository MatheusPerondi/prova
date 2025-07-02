import { Injectable, NotFoundException } from "@nestjs/common";
import { BookRepository } from "./book.repository";
import { Book } from "@prisma/client";

export interface UpdateBookServiceRequest {
    id: number;
    title: string;
    author: string;
    publictionYear: number;
    isbn: string;
}

interface UpdateBookServiceResponse {
    book: Book;
}

@Injectable()
export class EditBook {
    constructor(private bookRepository: BookRepository) { }

    async execute({
        id,
        title,
        author,
        publictionYear,
        isbn,
    }: UpdateBookServiceRequest): Promise<UpdateBookServiceResponse> {

        const book = await this.bookRepository.save({
            id,
            title,
            author,
            publictionYear,
            isbn
        });

        return { book };
    }
}