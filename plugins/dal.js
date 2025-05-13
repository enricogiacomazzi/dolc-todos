

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
    
    app.decorate('todos', todos);
    done();
}