import { Book } from "../../../dto/bookDto"
import BookService from "../../../service/bookService"

export default class BookResolver {
  public static createBook(_parents: {}, args: {book: Book}): Promise<Book> {
    return BookService.createBook(args.book);
  }
}
