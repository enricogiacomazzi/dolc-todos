

export default async function(app, opts) {
    app.put('/', async (req, res) => {
        const id = +req.params.id;
        
        const result = await app.pg.query(`
            UPDATE todos 
            SET text = $1, completed = $2
            WHERE id = $3;    
        `, [req.body.text, req.body.completed, id]);

        if(result.rowCount === 0) {
            return res.notFound();
        }
    
        return await app.pg.query('SELECT * from todos WHERE id = $1', [id])
            .then(r => r.rows[0]);
    });
}