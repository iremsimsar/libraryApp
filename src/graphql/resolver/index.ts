import BookResolver from "./mutation/bookResolver";

export default {
    Mutation: {
        createBook: BookResolver.createBook
    }
};
