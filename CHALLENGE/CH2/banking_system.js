// Di sini Anda dapat menambahkan implementasi kelas BankAccount dan metodenya
class BankAccount {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        setTimeout(() => {
            // Implementasi deposit
            this.balance += amount;
            saldoObject.updateSaldo();
            console.log(`Deposited $${amount.toFixed(2)} into the account.`);
        }, 2000); // Simulasi operasi asynchronous 2 detik
    }

    withdraw(amount) {
        setTimeout(() => {
            // Implementasi withdrawal
            if (this.balance >= amount) {
                this.balance -= amount;
                saldoObject.updateSaldo();
                console.log(`Withdrawn $${amount.toFixed(2)} from the account.`);
            } else {
                alert("Insufficient balance for withdrawal.");
            }
        }, 2000); // Simulasi operasi asynchronou
    }
}
