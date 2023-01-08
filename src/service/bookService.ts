import { db } from "../config/dbConfig";
import i18n from "../config/i18nConfig";
import { Book, BookWithPagination } from "../dto/bookDto";
import BookConvertor from "../convertor/bookConvertor";

export default class BookService {

    public static async getById(id: number): Promise<Book> {

        const result = await db.book.findUnique({
            where: {
                id: id
            }
        })

        if (!result) throw new Error(i18n.__('book.not_found'));

        return BookConvertor.toDto(result);
    }

    public static async createBook(book: Book): Promise<Book> {

        const result = await db.book.create({
            data: {
                name: book.name,
                author: book.author,
                price: book.price,
                stock: book.stock
            }
        })

        return BookConvertor.toDto(result);
    }

    public static async updateBook(id: number, book: Book): Promise<Book> {
        const result = await db.book.update({
            where: { id: id },
            data: {
                name: book.name,
                author: book.author,
                price: book.price,
                stock: book.stock
            }
        })
        return BookConvertor.toDto(result);

    }

    public static async deleteBook(id: number): Promise<Book> {
        const result = await db.book.delete({
            where: { id: id }
        })
        return BookConvertor.toDto(result);
    }

    public static async getAllBooks(page: number, size: number): Promise<BookWithPagination> {

        const result = await db.book.findMany({
            skip: (page - 1) * size,
            take: size
        })

        const totalCount = await db.book.count();

        return {
            data: BookConvertor.toDtoList(result),
            pagination: {
                total: totalCount,
                page: page,
                size: size
            }
        }
    }
}