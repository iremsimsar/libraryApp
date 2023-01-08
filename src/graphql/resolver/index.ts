import BookResolver from "./bookResolver";

export default {
    Mutation: {
        createBook: BookResolver.createBook,
        updateBook: BookResolver.updateBook,
        deleteBook: BookResolver.deleteBook
    },
    Query: {
        getBookById: BookResolver.getBook,
        getAllBooks: BookResolver.getAllBooks
    }
};
