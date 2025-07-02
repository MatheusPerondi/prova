import { Controller, Delete, HttpCode, Param, NotFoundException } from "@nestjs/common";
import { DeleteBookService } from "./delete-book.service";



@Controller('/books')
export class DeleteProductController {
  constructor(private deleteService: DeleteBookService) {}

  @Delete(':id')
  @HttpCode(204) 
  async handle(@Param('id') id: number) {
    try {
      await this.deleteService.execute({ id });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}