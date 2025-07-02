import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateBookService } from './create-book.service';
import { CreateBookController } from './create-book.controller';
import { DeleteProductController } from './delete-book.controller';
import { DeleteBookService } from './delete-book.service';
import { EditBook } from './edit-book.service';
import { UpdateBookController } from './edit-book.controller';
import { FindAllBookService } from './find-all.service';
import { FindAllProductsController } from './find-all.controller';
import { FindByIdController } from './get-book-by-id.controller';
import { FindBookByIdService } from './find-by-id.service';

@Module({
  imports: [],
  controllers: [AppController, CreateBookController, DeleteProductController, UpdateBookController, FindAllProductsController, FindByIdController],
  providers: [CreateBookService, DeleteBookService, EditBook, FindAllBookService, FindBookByIdService],
})
export class AppModule {}
