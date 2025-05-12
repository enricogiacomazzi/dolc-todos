

export default function(app, opts, done) {
    app.get('/todos/:id', async (req, res) => {
        const id = Number(req.params.id);
        console.log(id);
        const todo = app.todos.find(t => t.id === id);
        return todo ?? res.notFound();
    });

    done();
}