const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Error yang dibuat
app.get('/iniError', (req, res) => {
    iniError //ini penyebabnya
})

//Internal Server Error Handler
app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).json({
        status: 'fail',
        errors: err.message
    })
})






// //Manggil file js
// const router = require('./route')
// app.use(router)

// //Third-Party Middleware
// const morgan = require('morgan')
// app.use(morgan('dev'))
// //
// app.get('/endpointLain', (req, res) => res.send('Lain'))
app.listen(port, () => console.log(`Server Idup ${port}!`))


//404
app.use(function (err, req, res, next) {
    onsole.error(err)
    res.status(404).json({
        status: 'fail',
        errors: 'Are You Lost?'
    })
})
