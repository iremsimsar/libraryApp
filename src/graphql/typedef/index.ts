import { gql } from 'apollo-server-fastify'
import BookMutation from './bookMutation'

export default  gql`
    ${BookMutation}
`
