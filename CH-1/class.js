//Class

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
const person = new Person('rayhan', 'jakarta')
console.log(`${person.name}`)

class Toyata {
    //static property
    static founder = 'Ochiro Toyoda'

    //Constructor
    constructor(jenisMesin, roda, codeRakitan, tonase) {
        this.jenisMesin = jenisMesin;
        this.roda = roda;
        this.codeRakitan = codeRakitan;
        this.tonase = tonase;
    }

    //add method instance
    avanza() {
        return ''
    }

}

let toyata = new Toyata('Solar', 4, 'ckd671', '1 Ton')
console.log(toyata)




//========================
class Toyota {

    // static property
    static founder = 'Kiichiro Toyoda'

    // constructor method
    constructor(jenisMesin, roda, codeRakitan, tonase) {
        this.jenisMesin = jenisMesin
        this.roda = roda
        this.codeRakitan = codeRakitan
        this.tonase = tonase
    }

    // instance method
    avanza() {
        // return string we get the value from constructor method
        return `kendaraan penumpang ${this.roda} ber-mesin ${this.jenisMesin}
        Buatan Lokal atau ${this.codeRakitan} dengan tonase maksimal ${this.tonase}
        `
    }

    // cekSales(num) {
    //     return `
    //     Penjualan toyota rata-rata adalah ${num}
    //     `
    // }
}

Toyota.prototype.ayla = function (transmisi) {
    return `kendaraan penumpang ${this.roda} ber-mesin ${this.jenisMesin}
    Buatan Lokal atau ${this.codeRakitan} dengan tonase maksimal ${this.tonase} dengan transmisi ${transmisi}
    `
}

Toyota.cekSales = function () {
    return `
Penjualan toyota rata-rata adalah 10000
`
}

let toyota = new Toyota('bensin', '4', 'CKD', '1 Ton')
// console.log(toyota.cekSales(10000))

// console.log(toyota.ayla('otomatis'))
// console.log(toyota instanceof Toyota)
console.log(Toyota.cekSales())