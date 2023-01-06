export interface Book {
    id: number;
    name: string;
    author: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}

export default class BookDto implements Book {

    public id: number;
    public name: string;
    public author: string;
    public price: number;
    public stock: number;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(data: Book) {
        this.id = data.id;
        this.name = data.name;
        this.author = data.author;
        this.price = data.price;
        this.stock = data.stock;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    public static fromJson(data: Book): BookDto {
        return new BookDto(data);
    }
}