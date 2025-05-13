import S from 'fluent-json-schema';

export default async function(app, opts) {

    const schema = {
        body: S.object()
            .additionalProperties(false)
            .prop('text', S.string().required())
            .prop('completed', S.boolean().required())
    }


    app.post('/', {schema}, async (req, res) => {
        const newTodo = req.body;
        const id = Math.max(...app.todos.map(t => t.id), 0) + 1;
        newTodo.id = id;
        app.todos.push(newTodo);
    
        return newTodo;
    });
}