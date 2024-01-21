const express = require('express')
const crypto = require('crypto');

const path = require('path');

const app = express()
const port = 3000

app.use(express.json())

var BD = [  {
    texto: 'blah',
    usuario: 'pancho',
    cuarto: '4chan ',
    huella: '8b7df143d91c716ecfa5fc1730022f6b421b05cedee8fd52b1fc65a96030ad52'
  },  {
    texto: 'Me gusta el color Pink',
    usuario: 'jose',
    cuarto: 'PrincessHouse',
    huella: '666'
  }]

function generarHuellaDigital(mensaje) {
    return crypto.createHash('sha256').update(mensaje).digest('hex');
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
var chelas = {cubeta: "Indio AL CIEN plebe"}
//CRUD
app.post('/enviar', (req, res) => {
    req.body.huella = generarHuellaDigital(req.body.texto)
    console.log(req.body)
    BD.push(req.body)
    console.log('estos son todos tus mensajes wey', BD)
 })
app.get('/mensajes', (req, res) => {
    res.end(JSON.stringify(BD))
})
app.put('modificar', (req, res) => {
    console.log('pancho este es la huella digital carnal --->', req.body.huella)        

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

