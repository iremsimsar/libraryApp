import BookDto, { Book } from '../dto/bookDto';

export default class BookConvertor extends BookDto implements Book {
    constructor(book: Book) {
        super(book);
    }

    public static toDto(book: Book): BookDto {
        return new BookDto(book);
    }

    public static toDtoList(books: Book[]): BookDto[] {
        return books.map((book) => this.toDto(book));
    }
}