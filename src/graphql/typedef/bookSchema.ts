import { gql } from 'apollo-server-fastify'
import BigInt from 'graphql-bigint'

export default gql`
    scalar ${BigInt}

    type Book {
        id: BigInt
        name: String
        author: String
        price: Float
        stock: Int
        createdAt: BigInt
        updatedAt: BigInt
    }

    input BookInput {
        name: String
        author: String
        price: Float
        stock: Int
    }

`