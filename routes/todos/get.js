import S from 'fluent-json-schema';


export default async function(app, opts) {

    const schema = {
        response: {
            200: S.array().items(
                S.object()
                    .prop('id', S.number())
                    .prop('text', S.string())
                    .prop('completed', S.boolean())
            )
        }
    }

    app.get('/', { schema }, async (req, res) => {
        const result = await app.pg.query('SELECT * from todos');
        return result.rows;
    });
}