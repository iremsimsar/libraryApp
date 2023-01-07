import { gql } from 'apollo-server-fastify'
import bookSchema from './bookSchema'

export default gql`
    ${bookSchema}
    type Mutation {
        createBook(book: BookInput): Book
    }
    type Query {
        books: [Book]
    }
`
