//Buat Class Saldo
class Saldo {
    //Buat konstruktor
    constructor() {
        //Inisiasi dengan nilai 0
        this.saldo = 0;
        //getElement buat terbaca di HTML
        this.saldoElement = document.getElementById("saldo");
    }
    //Fungsi tambah
    tambahSaldo() {
        //Deklarasikan variabel tambahan lalu di konvert ke float
        const tambahan = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan : "));
        //validasi jika tidak NaN dan lebih dari 0 maka lanjut
        if (!isNaN(tambahan) && tambahan > 0) {
            this.saldo += tambahan;
            //manggil fugsi hasil akhir/ update saldo setelah dilakukan
            this.updateSaldo();
            alert(`Saldo baru Anda adalah: ${this.saldo}`);
        } else {
            alert("Inputan Yang Anda Masukkan Tidak Valid");
        }
    }
    //Fungsi kurang
    kurangiSaldo() {
        //Deklarasikan variabel pengurangan lalu di konvert ke float
        const pengurangan = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi : "));
        if (!isNaN(pengurangan) && pengurangan > 0) {
            if (this.saldo >= pengurangan) {
                this.saldo -= pengurangan;
                //manggil fugsi hasil akhir/ update saldo setelah dilakukan
                this.updateSaldo();
                alert(`Saldo baru Anda adalah: ${this.saldo}`);
            } else {
                alert("Saldo tidak mencukupi untuk melakukan pengurangan.");
            }
        } else {
            alert("Inputan Yang Anda Masukkan Tidak Valid");
        }
    }
    //fungsi update saldo
    updateSaldo() {
        this.saldoElement.textContent = this.saldo;
    }
}
//Membuat Obj dan instance class kedalam obj
const saldoObject = new Saldo();
