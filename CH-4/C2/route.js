const express = require('express')
const router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log(`Time :`, Date.now())
    next()
})

//route
router.get('/', function (req, res) {
    res.send('Hi, My Name')
})

//route
router.get('/about', function (req, res) {
    res.send('Saya adalah Seorang Programmer')
})


//Eksport file js
module.exports = router