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
        const result = await app.pg.query(`
            INSERT INTO todos (text, completed)
            VALUES ($1, $2)
            RETURNING id;    
        `, [newTodo.text, newTodo.completed]);

        const id = result.rows[0].id;
        const result2 = await app.pg.query('SELECT * from todos WHERE id = $1', [id]);
        return result2.rows[0];
    });
}