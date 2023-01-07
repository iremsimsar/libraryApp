import { db } from "../config/dbConfig";
import BookConvertor from "../convertor/bookConvertor";
import { Book } from "../dto/bookDto";

export default class BookService {

    public static async createBook(book: Book): Promise<Book> {
        console.log(book)
        const result = await db.book.create({
            data: {
                name: book.name,
                author: book.author,
                price: book.price,
                stock: book.stock,
                createdAt: book.createdAt,
                updatedAt: book.updatedAt
            }
        })

        return BookConvertor.toDto(result);
    }
}