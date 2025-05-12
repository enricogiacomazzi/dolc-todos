import fastifyPlugin from "fastify-plugin";

const tmp = function(app, opts, done) {
    const todos = [
        {
            id: 1,
            text: 'fare la spesa',
            completed: false
        },
        {
            id: 2,
            text: 'studiare javascript',
            completed: true
        }
    ];
    
    app.decorate('todos', todos);
    done();
}

export default fastifyPlugin(tmp);