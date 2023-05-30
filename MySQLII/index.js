/*const express = require('express')
const app = express()
const mysql = require('mysql2')
app.use(express.json())

app.get('/cadastro', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'bd_ususarios',
        password: '821160656'
    })

    connection.query('select * from tb_usuarios', (err, results, fields) => {
        res.send (results)
        res.send('ok')
    })
})

const porta = 3000
app.listen(porta, () => console.log(`servidor escutando a porta ${porta}`))*/

