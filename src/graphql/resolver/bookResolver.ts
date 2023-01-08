import { Book, BookWithPagination } from "../../dto/bookDto"
import BookService from "../../service/bookService"

export default class BookResolver {
  public static createBook(_parents: {}, args: { book: Book }): Promise<Book> {
    return BookService.createBook(args.book);
  }

  public static getBook(_parents: {}, args: { id: number }): Promise<Book> {
    return BookService.getById(args.id);
  }

  public static updateBook(_parents: {}, args: { id: number, book: Book }): Promise<Book> {
    return BookService.updateBook(args.id, args.book);
  }

  public static deleteBook(_parents: {}, args: { id: number }): Promise<Book> {
    return BookService.deleteBook(args.id);
  }

  public static getAllBooks(_parents: {}, args: { page: number, size: number }): Promise<BookWithPagination> {
    return BookService.getAllBooks(args.page, args.size);
  }
}
