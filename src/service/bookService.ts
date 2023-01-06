export default class BookService {

    public static getBookById(id: number): Promise<Book> {
        return new Promise((resolve, reject) => {
            BookModel.findById(id
                , (error, book) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(book);
                }
            );
        });
    }

    public static getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            BookModel.find({}, (error, books) => {
                if (error) {
                    reject(error);
                }
                resolve(books);
            });
        });
    }

    public static createBook(book: Book): Promise<Book> {
        return new Promise((resolve, reject) => {
            BookModel.create(book, (error, createdBook) => {
                if (error) {
                    reject(error);
                }
                resolve(createdBook);
            });
        });
    }

    public static updateBook(book: Book): Promise<Book> {
        return new Promise((resolve, reject) => {
            BookModel.findOneAndUpdate
                (
                    { _id: book.id },
                    book,
                    { new: true },
                    (error, updatedBook) => {
                        if (error) {
                            reject(error);
                        }
                        resolve(updatedBook);
                    }
                );
        });
    }
}