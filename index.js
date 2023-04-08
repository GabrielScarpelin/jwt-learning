const jose = require('jose')
const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/users.sqlite')
const cors = require('cors')



db.run('CREATE TABLE IF NOT EXISTS Users (email TEXT PRIMARY_KEY, senha TEXT)')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({}))

app.post('/login', (req, res, next)=>{
    const email = req.body.email
    const password = req.body.senha
    console.log(req.body)
    db.get(`SELECT * FROM Users WHERE email = '${email}'`, (err, row)=> {
        console.log(row)
        if (row){
            if (row.senha === password){
                const token = jwt.sign({ email }, process.env.PRIVATE_KEY, {
                    algorithm: 'RS256', 
                    expiresIn: 300
                })
                console.log('Sending')
                res.json({Authenticate: true, token}).status(200)
            }
            else {
                res.json({Authenticate: false}).status(404)
            }
        }
        else {
            res.json({Authenticate: false}).status(404)
        }
        })
        
})
app.post('/signup', (req, res, next)=>{
    const email = req.body.email
    const password = req.body.password
    const sqlString = `INSERT INTO Users (email, senha) values ('${email}', '${password}')`
    console.log(sqlString)
    db.run(sqlString, (runResult, err)=> {
        if (err){
            res.json({Cadastrado: false}).status(404)
        }
        else {
            res.json({Cadastrado: true}).status(200)
        }
    })

})


app.use((req, res, next)=>{
    const token = req.headers['x-access-token']
    jwt.verify(token, process.env.PUBLIC_KEY, {
        algorithm: ["RS256"]
    }, function (err, decoded) {
        console.log(decoded)
        if (err){
            res.json({validToken: false}).status(401)
        }
        
        else {
            next()
        }
    })
})
app.post('/auth', (req, res, next)=>{
    res.send({validToken: true}).status(200)
})
app.get('/home', (req, res, next)=>{
    res.send('OK')
    console.log('TUDO CERTO COM O TOKEN!')
})

app.listen(3000)