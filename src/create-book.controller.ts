import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";

const createBookSchema = z.object({
    title: z.string(),
    author: z.string(),
    publictionYear: z.number(),
    isbn: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createBookSchema);
type createBookSchema = z.infer<typeof createBookSchema>

@Controller('/books')
export class CreateBookController {
    constructor(private createBook: CreateBookController) {}

    @Post()
    @HttpCode(201)
    async handle(@Body(bodyValidationPipe) body: createBookSchema){
        const {
            title,
            author,
            publictionYear,
            isbn,
        } = body

        const book = await this.createBook.handle({
            title,
            author,
            publictionYear,
            isbn,
        })
    }
}