

export default async function(app, opts) {
    app.post('/', async (req, res) => {
        const newTodo = req.body;
        const id = Math.max(...app.todos.map(t => t.id), 0) + 1;
        newTodo.id = id;
        app.todos.push(newTodo);
    
        return newTodo;
    });
}