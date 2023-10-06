// function perkalian(x, y) {
//     try {
//         // Validation
//         if ((x * y) < 10) {
//             console.log(`Ini angka kekecilan`)
//             return
//         }
//         console.log(`Ini Proses Perkalian ${x * y}`)
//         return
//     } catch (error) {
//         console.log(`ini kena erorr ${error}`)
//         return
//     }
// }
// perkalian(2, 5)

// console.log(perkalian(2, 3))
// console.log(`Ini angka kekecilan`)

const fs = require('fs')
const option = {
    encoding: 'utf-8'
}
const callback = (err, data) => {
    console.log("Aku Muncul kedua")
    if (err) return console.error("Error :", err.message);
    console.log("Isi File :", data);
}
fs.readFile("contoh.txt", option, callback)
console.log("Aku Muncul")
