// 1.1 Arrow Function
const perkalianSatu = (a, b) => a * b
console.log(`Hasil Perkalian 1.1 : ${perkalianSatu(4, 5)}`)

// 1.2 Declared Function
function perkalianDua(a, b) {
    return a * b
}
console.log(`Hasil Perkalian 1.2 : ${perkalianDua(4, 8)}`)

// 1.3 Expression Function 
const perkalianTiga = function (a, b) {
    return a * b
}
console.log(`Hasil Perkalian 1.3 : ${perkalianTiga(4, 3)}`)


// 2
function mundur(a) {
    console.log(a);
    if (a <= 0) {
        return;
    } else {
        mundur(a - 10)
    }
}
mundur(100)

//======================================================================================
//Decralared
function perkalianParams(...input) {
    let resp
    for (const key of input) {
        if (!resp) {
            resp = key
        } else {
            resp *= key
        }
    }
    return resp
}
console.log(`${perkalianParams(3, 3, 3)}`)
// declaration
function declarationMultiply(...num1) {

    let resp

    for (const key of num1) {
        if (!resp) {
            resp = key
        } else {
            resp *= key
        }
    }

    return resp
}

// arrow function
let arrowMultiply = (...num1) => {

    let resp

    for (const key of num1) {
        if (!resp) {
            resp = key
        } else {
            resp *= key
        }
    }

    return resp

}
// expression
let expressionMultiply = (...num1) => {

    let resp

    for (const key of num1) {
        if (!resp) {
            resp = key
        } else {
            resp *= key
        }
    }

    return resp

}

console.log(arrowMultiply(4, 5, 5))
console.log(declarationMultiply(4, 5, 5))
console.log(expressionMultiply(4, 5, 5))


//======================================================================================