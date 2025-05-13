
import fastifyPostgres from '@fastify/postgres';

export default function(app, opts, done) {
    const todos = [
        {
            id: 1,
            text: 'fare la spesa',
            completed: false,
            secret: 'my super secret'
        },
        {
            id: 2,
            text: 'studiare javascript',
            completed: true
        }
    ];
    
    app.register(fastifyPostgres, {
        connectionString: 'postgres://postgres:password@localhost/dolc'
    });

    app.decorate('todos', todos);
    done();
}