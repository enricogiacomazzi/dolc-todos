

export default async function(app, opts) {
    app.patch('/', async (req, res) => {
        const id = +req.params.id;

        const tmp = [];
        const param = [];
        let index = 1;


        for(const k in req.body) {
            if(k !== 'id') {
                tmp.push(`${k} = $${index++}`)
                param.push(req.body[k]);
            }
        }

        param.push(id);

        const result = await app.pg.query(`
            UPDATE todos 
            SET ${tmp.join(', ')}
            WHERE id = $${index};    
        `, param);

        if(result.rowCount === 0) {
            return res.notFound();
        }
    
        return await app.pg.query('SELECT * from todos WHERE id = $1', [id])
        .then(r => r.rows[0]);
    });
}