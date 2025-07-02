import { Book, Prisma } from "@prisma/client";
import { PrismaService } from "./prisma-service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BookRepository {
    constructor(private prisma: PrismaService){}

    async create(book: Prisma.BookUncheckedCreateInput): Promise<Prisma.BookUncheckedCreateInput>{
        return await this.prisma.book.create({
            data: book
        })
    }

    async findAll(): Promise<Prisma.BookUncheckedCreateInput[]>{
        return await this.prisma.book.findMany();
    }

    async fidnById(id: number): Promise<Book | null> {
        return await this.prisma.book.findUnique({
            where: {id}
        })
    }

    async delete(id: number): Promise<Book> {
        return this.prisma.book.delete({
            where: { id }
        })
    }

    async findByTitle(title: string): Promise<Prisma.BookUncheckedCreateInput[] | null> {
        return await this.prisma.book.findMany({
            where: {
                title,
            }
        })
    }

    async findByISNB(isbn: string): Promise<Prisma.BookUncheckedCreateInput[] | null> {
        return await this.prisma.book.findMany({
            where: {
                isbn,
            }
        })
    }
    
    async save(data: {
        id: number;
        title: string;
        author: string;
        publictionYear: number;
        isbn: string;
    }): Promise<Book> {
        const {id, ...rest} = data;

        return await this.prisma.book.update({
            where: { id },
            data: {...rest},
        })
        
    }
}