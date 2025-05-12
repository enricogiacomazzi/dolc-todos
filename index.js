import fastify from "fastify";
import fastifySensible from "@fastify/sensible";
import dal from './plugins/dal.js';
import routes from './routes/todos.js';

const app = fastify({
    logger: true
});

await app.register(fastifySensible);

await app.register(dal);
await app.register(routes);




await app.listen({port: 6060});