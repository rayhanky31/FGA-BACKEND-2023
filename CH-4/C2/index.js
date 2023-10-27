const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Manggil file js
const router = require('./route')
app.use(router)

//Third-Party Middleware
const morgan = require('morgan')
app.use(morgan('dev'))
//
app.get('/endpointLain', (req, res) => res.send('Lain'))
app.listen(port, () => console.log(`Server Idup ${port}!`))