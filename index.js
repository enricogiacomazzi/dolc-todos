import fastify from "fastify";
import autoLoad from '@fastify/autoload';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = fastify({
    logger: true
});

await app.register(autoLoad, {
    dir: join(__dirname, 'plugins'),
    encapsulate: false
});

await app.register(autoLoad, {
    dir: join(__dirname, 'routes'),
    routeParams: true
});




await app.listen({port: 6060});