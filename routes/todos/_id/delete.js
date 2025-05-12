

export default async function(app, opts) {
    app.delete('/', async (req, res) => {
        const id = +req.params.id;
        const index = app.todos.findIndex(t => t.id === id);
        if(index < 0) {
            return res.notFound();
        }
        app.todos.splice(index, 1);
        res.statusCode = 204;
    });
}