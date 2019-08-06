const express = require('express')
const movieRouter = require('./routers/movieRouter')
const catRouter = require('./routers/catRouter')

const app = express ()
const port = 2019

app.use(express.json())
app.use(movieRouter)
app.use(catRouter)


app.listen (port, () => {
    console.log('Berhasil Running di Port ' + port );
    
})

app.get('/', (req,res) => {
    res.send(`<h1>API sukses berjalan di PORT ${port}</h1>`)
})