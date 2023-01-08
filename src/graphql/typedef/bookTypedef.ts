import { gql } from 'apollo-server-fastify'
import bookSchema from './bookSchema'

export default gql`
    ${bookSchema}
    type Mutation {
        createBook(book: BookInput!): Book,
        updateBook(id: Int!, book: BookInput!): Book,
        deleteBook(id: Int!): Book
    }
    type Query {
        getBookById(id: Int!): Book,
        getAllBooks(page: Int!, size: Int!): BookWithPagination
    }
`
