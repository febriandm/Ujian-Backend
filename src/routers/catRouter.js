const conn = require('../connection/')
const router = require('express').Router()

router.post('/categories', (req, res) => {
    const sql = `INSERT INTO categories SET ?`
    const sql2 = `SELECT * FROM categories WHERE id = ?`
    const data = req.body


    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        conn.query(sql2, result.insertId, (err, result2) => {
            if(err) return res.send(err)

            res.send(result2[0])
        })
    })
})

router.patch('/edit_cat/:id', (req, res) => {
    const sql = `UPDATE categories SET ? WHERE id = '${req.params.id}'`
    const sql2 = `SELECT nama FROM categories WHERE id = '${req.params.id}'`
    
    conn.query(sql, req.body, (err, result) => {
        if(err) return res.send(err)

        conn.query(sql2, (err, result2) => {
            if(err) return res.send(err)

            res.send(result2[0])
        })
    })
})

router.delete('/del_cat/:id', (req, res) => {
    const sql = `DELETE FROM categories WHERE id = ?`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

router.get('/get_cat', (req, res) => {
    const sql = `SELECT * from categories`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})


module.exports = router 