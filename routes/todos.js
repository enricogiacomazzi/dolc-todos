import get from './todos/get.js';
import getById from './todos/getById.js';


export default async function(app, opts) {

    await app.register(get);
    await app.register(getById);

    app.post('/todos', async (req, res) => {
        const newTodo = req.body;
        const id = Math.max(...app.todos.map(t => t.id), 0) + 1;
        newTodo.id = id;
        app.todos.push(newTodo);
    
        return newTodo;
    });
    
    app.put('/todos/:id', async (req, res) => {
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
    
    app.patch('/todos/:id', async (req, res) => {
        const id = +req.params.id;
        const index = app.todos.findIndex(t => t.id === id);
        if(index < 0) {
            return res.notFound();
        }
    
        const edited = req.body;
        app.todos[index] = {...app.todos[index], ...edited, id};
        return app.todos[index];
    });
    
    app.delete('/todos/:id', async (req, res) => {
        const id = +req.params.id;
        const index = app.todos.findIndex(t => t.id === id);
        if(index < 0) {
            return res.notFound();
        }
        app.todos.splice(index, 1);
        res.statusCode = 204;
    });
}