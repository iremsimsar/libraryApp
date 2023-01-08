import fastify, { FastifyReply, FastifyRequest } from "fastify";
import typeDefs from "./graphql/typedef/bookTypedef";
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
                ApolloServerPluginLandingPageLocalDefault({ embed: true }),
                ApolloServerPluginDrainHttpServer({ httpServer: fastifyServer.server }),
            ],
            formatError: (error) => { return GraphError.formatError(error); }
        });

        fastifyServer.register(dbConnect)

        fastifyServer.addHook('onRequest', (request: FastifyRequest, _reply: FastifyReply, done) => {
            i18n.setLocale(request.headers['accept-language'] || 'tr')
            done()
        })

        await apollo.start();

        return fastifyServer
            .register(apollo.createHandler())
            .setErrorHandler((error: Error, _request: FastifyRequest, reply: FastifyReply) => {
                console.error(error);
                reply.code(500).send({ message: error.message });
            });
    }
}