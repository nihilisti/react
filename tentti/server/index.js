var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
module.exports = app
var port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())

const db = require('./db')

// tentit

// hae tentti
app.get('/tentti/:id', (req, res, next) => {
  db.query('SELECT * FROM tentti WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})

// lisää uusi tentti
app.post('/lisaatentti/:nimi/:ajankohta', (req, res, next) => {      
  db.query('INSERT INTO tentti (nimi, ajankohta) VALUES ($1, $2)', [req.params.nimi, req.params.ajankohta], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Tentin lisäys onnistui")
  })
})

// muokkaa tentin ajankohtaa
app.put('/muokkaatenttia/:ajankohta/:id', (req, res, next) => {      
  db.query('UPDATE tentti SET ajankohta = $1 WHERE "id" = $2', [req.params.ajankohta, req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Tentin muokkaus onnistui")
  })
})

// muokkaa tentin nimeä
app.put('/muokkaatenttia2/:nimi/:id', (req, res, next) => {      
  db.query('UPDATE tentti SET nimi = $1 WHERE "id" = $2', [req.params.nimi, req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Tentin muokkaus onnistui")
  })
})

// poista tentti
app.delete('/poistatentti/:id', (req, res, next) => {      
  db.query('DELETE FROM tentti WHERE "id" = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Tentin poisto onnistui")
  })
})

// kysymykset

// hae kysymys
app.get('/kysymys/:id', (req, res, next) => {
  db.query('SELECT * FROM kysymys WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})

// lisää uusi kysymys
app.post('/lisaakysymys/:nimi/:numero', (req, res, next) => {      
  db.query('INSERT INTO kysymys (nimi, numero) VALUES ($1, $2)', [req.params.nimi, req.params.numero], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Kysymyksen lisäys onnistui")
  })
})

// muokkaa kysymystä
app.put('/muokkaakysymysta/:nimi/:id', (req, res, next) => {      
  db.query('UPDATE kysymys SET nimi = $1 WHERE "id" = $2', [req.params.nimi, req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Kysymyksen muokkaus onnistui")
  })
})

// muokkaa kysymyksen numeroa
app.put('/muokkaakysymysta2/:numero/:id', (req, res, next) => {      
  db.query('UPDATE kysymys SET numero = $1 WHERE "id" = $2', [req.params.numero, req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Kysymyksen muokkaus onnistui")
  })
})

// poista kysymys
app.delete('/poistakysymys/:id', (req, res, next) => {      
  db.query('DELETE FROM kysymys WHERE "id" = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Kysymyksen poisto onnistui")
  })
})

// vaihtoehdot

// // lisää uusi vaihtoehto
app.post('/lisaavaihtoehto/:numero/:nimi/:oikea', (req, res, next) => {      
  db.query('INSERT INTO vaihtoehto (numero, nimi, oikea) VALUES ($1, $2, $3)', [req.params.numero, req.params.nimi, req.params.oikea], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Vastausvaihtoehdon lisäys onnistui")
  })
})

// muokkaa vaihtoehdon nimeä
app.put('/muokkaavaihtoehtoa/:nimi/:id', (req, res, next) => {      
  db.query('UPDATE vaihtoehto SET nimi = $1 WHERE "id" = $2', [req.params.nimi, req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Vastausvaihtoehdon muokkaus onnistui")
  })
})

// muokkaa vaihtoehdon numeroa
app.put('/muokkaavaihtoehtoa2/:numero/:id', (req, res, next) => {      
  db.query('UPDATE vaihtoehto SET numero = $1 WHERE "id" = $2', [req.params.numero, req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Vastausvaihtoehdon muokkaus onnistui")
  })
})

// poista vaihtoehto
app.delete('/poistavaihtoehto/:id', (req, res, next) => {      
  db.query('DELETE FROM vaihtoehto WHERE "id" = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send("Vastausvaihtoehdon poisto onnistui")
  })
})

////

app.get('/', (req, res) => {
  res.send('Goodbye World! GET')
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

// ÄLÄ POISTA
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})