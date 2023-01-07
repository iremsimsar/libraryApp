import fastify, { FastifyReply, FastifyRequest } from "fastify";
import typeDefs from "./graphql/typedef";
import resolvers from "./graphql/resolver";
import { ApolloServer } from "apollo-server-fastify";
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginDrainHttpServer
} from "apollo-server-core";
import GraphError from "./helper/error/graphError";
import i18n from './config/i18nConfig'
import { dbConnect } from "./config/dbConfig";

export default class BuildServer {

    public static async build() {

        const fastifyServer = fastify();

        const apollo: any = new ApolloServer({
            typeDefs,
            resolvers,
            csrfPrevention: true,
            plugins: [
                ApolloServerPluginLandingPageLocalDefault({}),
                ApolloServerPluginDrainHttpServer({ httpServer: fastifyServer.server }),
            ],
            context: ({ request }: { request: FastifyRequest }) => { return request.headers.authorization?.split(' ')?.[1]; },
            formatError: (error) => { return GraphError.formatError(error); }
        });


       fastifyServer.register(dbConnect)

        fastifyServer.addHook('onRequest', (req: FastifyRequest, _res: FastifyReply, done) => {
            i18n.setLocale(req.headers['accept-language'] || 'tr')
            done()
        })

        await apollo.start();

        return fastifyServer
            .register(apollo.createHandler())
            .setErrorHandler((error, _request, reply) => {
                console.error(error);
                reply.code(500).send({ message: error.message });
            });
    }
}