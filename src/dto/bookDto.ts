export interface Book {
    id: number;
    name: string;
    author: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Pagination {
    total: number;
    page: number;
    size: number;
}

export interface BookWithPagination {
    data: Book[];
    pagination: Pagination;
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
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = new Date(data.updatedAt);
    }

}