const router = require('express').Router()
const conn = require('../connection/')


router.post('/movies', (req, res) => {
    const sql = `INSERT INTO movies SET ?`
    const sql2 = `SELECT * FROM movies WHERE id = ?`

    conn.query(sql, req.body, (err, result) => {
        if(err) return res.send(err)

        conn.query(sql2, result.insertId, (err, result2) => {
            if(err) return res.send(err)

            res.send(result2[0])
        })
    })
})

router.patch('/edit_movies/:id', (req, res) => {
    const sql = `DELETE movies SET ? WHERE id = '${req.params.id}'`
    const sql2 = `SELECT nama, tahun, deskripsi FROM movies WHERE id = '${req.params.id}'`
    
    conn.query(sql, req.body, (err, result) => {
        if(err) return res.send(err)

        conn.query(sql2, (err, result2) => {
            if(err) return res.send(err)

            res.send(result2[0])
        })
    })
})

router.delete('/del_movies/:id', (req, res) => {
    const sql = `DELETE FROM movies WHERE id = ?`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

router.get('/get_movies', (req, res) => {
    const sql = `SELECT * from movies`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})


module.exports = router 