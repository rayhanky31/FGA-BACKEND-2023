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
//By : Rayhan Kurnia Yusda



// //==============================================
// //Rayhan Kurnia Yusda
// // Variabel saldo awal/ Versi Fungsi saja
// let saldo = 0;

// // Fungsi untuk menambahkan saldo
// function tambahSaldo() {
//     const tambahan = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan : "));
//     // !isNaN(Not a Number) => Men-check apakah nilai tidak bernilai tidak angka
//     if (!isNaN(tambahan) && tambahan > 0) {
//         saldo += tambahan;// saldo = saldo+tambahan
//         //Nanti bisa dibaca pada id yang telah kita set
//         document.getElementById("saldo").textContent = saldo;
//         alert(`Saldo baru Anda adalah: ${saldo}`);
//     } else {
//         alert("Inputan Yang Anda Masukkan Tidak Valid");
//     }
// }

// // Fungsi untuk mengurangi saldo
// function kurangiSaldo() {
//     const pengurangan = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi : "));
//     // !isNaN => Men-check apakah nilai tidak bernilai tidak angka (Not a Number)
//     if (!isNaN(pengurangan) && pengurangan > 0) {
//         //Jika saldo lebih besar atau sama dengan pengurangan, maka kondisi ini akan sukses dikurangkan
//         if (saldo >= pengurangan) {
//             saldo -= pengurangan; //saldo = saldo -
//             //Nanti bisa dibaca pada id yang telah kita set
//             document.getElementById("saldo").textContent = saldo;
//             alert(`Saldo baru Anda adalah: ${saldo}`);
//         } else {
//             alert("Saldo tidak mencukupi untuk melakukan pengurangan.");
//         }
//     } else {
//         alert("Inputan Yang Anda Masukkan Tidak Valid");
//     }
// }

// //==============================================================================================
