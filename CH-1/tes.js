// let checkOBJ = {
//     student: 'wahyu',
//     age: 25,
//     hobby: ['memancing', 'berenang']
// }

// let resp = []
// checkOBJ.forEach(element => {
//     console.log(element)
// });
// console.log(checkOBJ[0])
// let numbers = ['1', '2', '3', '4', '5', '6']
// const muta = numbers.map(element => {
//     return element + 2

// })
// console.log(muta)

// //IF CONDITIONAL
// let tahun = 1951
// if (tahun == 1945) {
//     console.log("Baru Merdeka")
// } else if (tahun > 1945 && tahun < 1950) {
//     console.log("Era Sukarno")
// } else if (tahun == 1950) {
//     console.log("Transisi")
// } else if (tahun > 1965 && tahun < 1999) {
//     console.log("Era Suharto")
// }

// //SWITCH CASE
// let tahun = 1950
// switch (tahun) {
//     case 1950:
//         console.log("Indoonesia Lagi Gaduh")
//         break;
//     case 1965:
//         console.log("Pemberontakan PKI")
//     default:
//         console.log("Masa Galau")
//         break;
// }

//LOOPING
//FOR, WHILE, DO WHILE
// let n = 0;

// while (n < 3) {
//     console.log(n);
//     n++;
// }
// console.log(n);
// // Expected output: 3

// for (let i = 1; i < 5; i++) {
//     let temp = ''
//     for (let j = 1; j < i + 1; j++) {

//     }
//     console.log(temp)
// }

//Function
// function Perkalian(a, b) {
//     let x
//     x = a * b
//     return x
// }
// console.log(`Hasil Kali = ${Perkalian(4, 5)}`)

// //FUnction 2
// function Pertambahan(params1, params2) {
//     console.log(`cek isi >>>${params1} >>> ${params2}`)
//     //Memvalidasi Number Apakah Terisi
//     if (!params1 || !params2) {
//         return 'Inavalid Number'
//     }
//     return params1 + params2
// }
// console.log(`Hasil : ${Pertambahan(2, 'a')}`)


// //Function 3
// function Hadiah(win) {
//     //Menggunakan Ternary
//     return win ? 'dapat hadiah' : 'Kurang Beruntng'
// }
// console.log(`Hasil : ${Hadiah(1)} `)

// //Function Expresi objek
// let hasilkali = {
//     bagi: (a) => {
//         return a * a
//     }
// }
// console.log(`Hasil = ${hasilkali.bagi(3)}`)


//===============================================================================//
// buatkan sebuah function yg bernama getRouletWinner dengan param array object player
// dengan field player name dan birth_year
// dimana function ini akan memanggil function gameLogic dengan param array of player objects
// secara random akan memilih salah satu pemenang dari param
// dan akan memanggil function checkAgeWinner dimana akan memvalidasi return pemenang dari gamelogic
// apabila pemenang berusia lebih dari 50 tahun hari ini maka
// akan console pemenang dan hadiah x 100 serta total hadiah x100
// jika tidak maka akan console selamat anda menang dengan total hadiah saja

// let player = [
//     {
//         name: 'fadhil',
//         birth_year: 1940
//     },
//     {
//         name: 'agil',
//         birth_year: 2000
//     },
//     {
//         name: 'rasyad',
//         birth_year: 2001
//     }
// ]

// let grandPrize = 100
// let jackpotWinner = 100

// function getRouletWinner(params) {

//     let gameWinner = gameLogic(params)

//     console.log(gameWinner)
//     let checkWinner = checkAgeWinner(gameWinner)

//     if (checkWinner) {
//         console.log(`congratulation to ${gameWinner.name}`)
//         console.log(`you will be rewarded ${grandPrize} x ${jackpotWinner}`)
//         console.log(`total prize will be ${grandPrize * jackpotWinner}`)
//     } else {
//         console.log(`congratulation to ${gameWinner.name}`)
//         console.log(`total prize will be ${grandPrize * jackpotWinner}`)
//     }
//     return
// }


// function gameLogic(params) {
//     let indexWinner = Math.floor(Math.random() * params.length)
//     console.log(`ini index pemenangnya ${indexWinner}`)
//     let winner = params[indexWinner]

//     return winner
// }

// function checkAgeWinner(params) {

//     // check winner age
//     const winnerBirthYear = params.birth_year
//     const now = new Date()
//     const currentYear = now.getFullYear()

//     const playerAge = currentYear - winnerBirthYear

//     if (playerAge > 50) {
//         return true
//     }

//     return false
// }

// getRouletWinner(player)
// //===============================================================================//


