

export default async function(app, opts) {
    app.patch('/', async (req, res) => {
        const id = +req.params.id;
        const index = app.todos.findIndex(t => t.id === id);
        if(index < 0) {
            return res.notFound();
        }
    
        const edited = req.body;
        app.todos[index] = {...app.todos[index], ...edited, id};
        return app.todos[index];
    });
}