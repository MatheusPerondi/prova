import { Controller, Get, HttpCode } from "@nestjs/common";
import { FindAllBookService } from "./find-all.service";

@Controller('/books')
export class FindAllProductsController {
    constructor(private findAllBooks: FindAllBookService) { }

    @Get()
    @HttpCode(200)
    async handle() {
        const result = await this.findAllBooks.execute();

        const books = result.books.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
            publictionYear: book.publicationYear,
            isbn: book.isbn,
            createdAt: book.createdAt,
            updatedAt: book.updatedAt ?? undefined,
        
        }));

        return { books };
    }
}