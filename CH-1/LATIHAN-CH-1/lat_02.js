//instanceof, static, property static, instance dan stattic method didalamnya
class Yamaha {
    //static property
    static pimpinan = "Badu Saputra";
    constructor(nama, warna, jenisMotor, harga) {
        this.nama = nama;
        this.warna = warna;
        this.jenisMotor = jenisMotor;
        this.harga = harga;
    }

    //method instance
    detail() {
        console.log(`Dengan nama motor ${this.nama},dengan jenis motor ${this.jenisMotor}dan dengan harga motor dalam rupiah ${this.harga}`)
    }

}

console.log(Yamaha.pimpinan)

Yamaha.prototype.vega = function (nama) {
    console.log(`Nama Motor ${nama}, motor ${this.nama}`)
}
Yamaha.destroy = function (a) {
    console.log(`Motor is destroying ${a}`)
}

// Instance class yamaha
let ym = new Yamaha('Nmax', 'Hitam', 'Matic', 4500000)
console.log(ym)
// console.log(ym instanceof Yamaha)
console.log(ym.detail())