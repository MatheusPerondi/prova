import { Body, Controller, HttpCode, Param, Put } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";
import { EditBook } from "./edit-book.service";

const updateBookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  publictionYear: z.number(),
  isbn: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(updateBookSchema);
type UpdateBookDTO = z.infer<typeof updateBookSchema>;

@Controller('/books')
export class UpdateBookController {
  constructor(private editBookService: EditBook) {}

  @Put(':id')
  @HttpCode(200)
  async handle(
    @Param('id') idParam: number,
    @Body(bodyValidationPipe) body: UpdateBookDTO
  ) {
    const id = Number(idParam);

    const { book } = await this.editBookService.execute({
      id,
      ...body,
    });

    return { book };
  }
}
