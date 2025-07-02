import { Injectable, NotFoundException } from "@nestjs/common";
import { BookRepository } from "./book.repository";

export interface DeleteBookServiceRequest {
    id: number;
}

export interface DeleteBookServiceResponse {
    deletedId: number;
}

@Injectable()
export class DeleteBookService {
    constructor(private bookRepository: BookRepository) { }

    async execute({ id }: DeleteBookServiceRequest): Promise<DeleteBookServiceResponse> {
        const existing = await this.bookRepository.fidnById(id)

        if (!existing) {
            throw new NotFoundException(`Model with id ${id} not found`);
        }

        await this.bookRepository.delete(id);

        return {
            deletedId: id,
        };
    }
}