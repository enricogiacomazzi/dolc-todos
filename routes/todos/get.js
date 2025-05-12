

export default async function(app, opts) {
    app.get('/', async (req, res) => {
        return app.todos;
    });
}