

export default async function(app, opts) {
    app.delete('/', async (req, res) => {
        const id = +req.params.id;
        const result = await app.pg.query('DELETE FROM todos WHERE id = $1', [id]);
        if(result.rowCount === 0) {
            return res.notFound();
        }

        res.statusCode = 204;
    });
}