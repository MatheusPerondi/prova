import { z } from "zod";
import { Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";
import { FindBookByIdService } from "./find-by-id.service";


const createProductBodySchema = z.object({
    id: z.number(),
});

const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);
type createProductBodySchema = z.infer<typeof createProductBodySchema>

@Controller('/books/findById')
export class FindByIdController {
    constructor(private findById: FindBookByIdService) {}

    @Get(':id')
    @HttpCode(200)
    async handle(@Param('id') id: number) {
        const result = await this.findById.execute({ id });

        const book = result.book.map(book => book.id);

        return { id: id };
    }
}