

export default async function(app, opts) {
    app.get('/', async (req, res) => {
        const id = Number(req.params.id);
        const result = await app.pg.query('SELECT * from todos WHERE id = $1', [id]);
        return result.rowCount > 0 ? result.rows[0] : res.notFound();
    });
}