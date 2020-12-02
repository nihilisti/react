var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")

var app = express()
module.exports = app
var port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())

const db = require('./db')

app.get('/tentti/:id', (req, res, next) => {
  db.query('SELECT * FROM tentti WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})

app.post('/tentit/:id/kysymykset/:is2', (req, res, next) => {      
  db.query('INSERT...$1   $2', [req.params.id],[req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})

app.get('/', (req, res) => {
  res.send('Hello World! GET')
})

app.post('/', (req, res) => {
  res.send('Hello World! POST')
})

app.delete('/', (req, res) => {
  res.send('Hello World! DELETE')
})

app.put('/', (req, res) => {
  res.send('Hello World! PUT')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})