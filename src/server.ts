import buildServer from "./app";
import envConfig from "./config/envConfig";

async function start() {
    try {
        const server = await buildServer.build();
        const port = envConfig.port;
        await server.listen({ port });
        console.log(`Server listening ${port} port ﹗`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();
