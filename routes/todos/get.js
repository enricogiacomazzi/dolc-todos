

export default async function(app, opts) {
    app.get('/todos', async (req, res) => {
        return app.todos;
    });
}