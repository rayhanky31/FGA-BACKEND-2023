const express = require('express')
const app = express()

//2. Built-in middleware
// Express.json dan express.urlencoded dipakai buat
// melakukan parsing terhadap request body berdasarkan
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const port = 3000


//Request(url,header dan body) dan Respon(Send, Status,JSon, Sendfile, render)
app.get('/', (req, res) => {
    //res menggunnakan method send untuk mengirim callback
    res.send('Hello World!')
})

//setiap get request akan mengarah http://localhost:3000/product
app.get('/product', (req, res) => {
    res.json([
        "Apple",
        "Mango",
        "Redmi"
    ])
})

//setiap get request akan mengarah http://localhost:3000/order
app.get('/order', (req, res) => {
    res.json([
        {
            id: 1,
            paid: false,
            user_id: 1
        },
        {
            id: 2,
            paid: true,
            user_id: 2
        }
    ])
})

//Middleware

//1. Application level middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}
app.use(logger)


//Method yang dipakai untuk menyalakan web server saat file tersebut dijalankan.
app.listen(port, () => console.log(`Server Hidup ${port}!`))


