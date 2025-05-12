

export default async function(app, opts) {
    app.put('/', async (req, res) => {
        const id = +req.params.id;
        const index = app.todos.findIndex(t => t.id === id);
        if(index < 0) {
            return res.notFound();
        }
    
        const edited = req.body;
        edited.id = id;
        app.todos[index] = edited;
        return edited;
    });
}