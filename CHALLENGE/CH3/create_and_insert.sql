-- DDL (Data Definition Language) --
-- Tabel Nasabah
CREATE TYPE status_kawin_enum AS ENUM ('Lajang', 'Kawin');
CREATE TABLE Nasabah (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  jenis_kelamin CHAR(1) NOT NULL,
  tanggal_lahir DATE NOT NULL,
  alamat text NOT NULL,
  nomor_telpon VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  status_kawin status_kawin_enum,
  pekerjaan VARCHAR(50) NOT NULL
);

-- Tabel Akun
CREATE TYPE jenis_akun_enum AS ENUM ('Tabungan', 'Giro', 'Deposito', 'Kredit');
CREATE TABLE Akun (
  id SERIAL PRIMARY KEY, 
  no_rek VARCHAR(20) NOT NULL,
  jenis_akun jenis_akun_enum NOT NULL,
  saldo_akun NUMERIC(10, 2) NOT NULL,  
  tgl_buka_akun TIMESTAMP NOT NULL,
  status_akun BOOLEAN NOT NULL,
  id_nasabah INTEGER REFERENCES Nasabah(id)
);

-- Tabel Transaksi
CREATE TYPE jenis_trx_enum AS ENUM ('Debit', 'Kredit', 'Transfer', 'Penarikan Tunai');
CREATE TABLE Transaksi (
  id SERIAL PRIMARY KEY,
  jenis_trx VARCHAR(20) NOT NULL,
  jumlah_trx NUMERIC(10, 2) NOT NULL,
  tgl_trx TIMESTAMP NOT NULL,
  ket_trx TEXT NOT NULL,
  id_akun INTEGER REFERENCES Akun(id)
);

-- Penambahan Index
-- Mempercepat pencarian berdasarkan nama nasabah:
CREATE INDEX idx_nama_nasabah ON Nasabah (nama);

-- Mempercepat pencarian berdasarkan nomor rekening:
CREATE INDEX idx_no_rek_akun ON Akun (no_rek);

-- Mempercepat pencarian berdasarkan tanggal transaksi:
CREATE INDEX idx_tgl_trx_transaksi ON Transaksi (tgl_trx);


-- DML (Data Manipulation Language) --
-- INSERT -- 
-- FUNCTION INSERT NASABAH --
CREATE OR REPLACE FUNCTION insert_nasabah(
    nama_param VARCHAR(255),
    jenis_kelamin_param CHAR(1),
    tanggal_lahir_param DATE,
    alamat_param TEXT,
    nomor_telpon_param VARCHAR(15),
    email_param VARCHAR(255),
    status_kawin_param status_kawin_enum,
    pekerjaan_param VARCHAR(50)
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO Nasabah (nama, jenis_kelamin, tanggal_lahir, alamat, nomor_telpon, email, status_kawin, pekerjaan)
    VALUES (nama_param, jenis_kelamin_param, tanggal_lahir_param, alamat_param, nomor_telpon_param, email_param, status_kawin_param, pekerjaan_param);
END;
$$ LANGUAGE plpgsql;

-- FUNCTION INSERT AKUN --
CREATE OR REPLACE FUNCTION insert_akun(
    no_rek_param VARCHAR(20),
    jenis_akun_param jenis_akun_enum,
    saldo_akun_param NUMERIC,
    tgl_buka_akun_param TIMESTAMP,
    status_akun_param BOOLEAN,
    id_nasabah_param INTEGER
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO Akun (no_rek, jenis_akun, saldo_akun, tgl_buka_akun, status_akun, id_nasabah)
    VALUES (no_rek_param, jenis_akun_param, saldo_akun_param, tgl_buka_akun_param, status_akun_param, id_nasabah_param);
END;
$$ LANGUAGE plpgsql;

-- FUNCTION INSERT TRANSAKSI --
CREATE OR REPLACE FUNCTION insert_transaksi(
    jenis_trx_param VARCHAR(20),
    jumlah_trx_param NUMERIC,
    tgl_trx_param TIMESTAMP,
    ket_trx_param TEXT,
    id_akun_param INTEGER
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO Transaksi (jenis_trx, jumlah_trx, tgl_trx, ket_trx, id_akun)
    VALUES (jenis_trx_param, jumlah_trx_param, tgl_trx_param, ket_trx_param, id_akun_param);
END;
$$ LANGUAGE plpgsql;

-- 1 --
SELECT insert_nasabah('John Doe', 'L', '1990-05-15', 'Jl. Contoh No. 123', '081234567890', 'john.doe@example.com', 'Kawin', 'Pegawai');
SELECT insert_akun('12345', 'Tabungan', 10000.00, '2023-01-01 08:00:00', TRUE, 1);
SELECT insert_transaksi('Debit', 500.00, '2023-03-10 08:30:00', 'Penarikan tunai', 1);


-- 2 --
SELECT insert_nasabah('Jane Smith', 'P', '1995-08-20', 'Jl. Contoh No. 456', '081234567891', 'jane.smith@example.com', 'Lajang', 'Mahasiswa');
SELECT insert_akun('23456', 'Giro', 8000.00, '2023-01-05 10:15:00', TRUE, 2);
SELECT insert_transaksi('Kredit', 1000.00, '2023-03-15 14:45:00', 'Setoran', 2);

-- 3 --
SELECT insert_nasabah('Alice Johnson', 'P', '1985-12-10', 'Jl. Contoh No. 789', '081234567892', 'alice.johnson@example.com', 'Kawin', 'Wirausaha');
SELECT insert_akun('34567', 'Deposito', 15000.00, '2023-02-20 09:30:00', TRUE, 3);
SELECT insert_transaksi('Transfer', 2000.00, '2023-04-01 16:00:00', 'Transfer ke rekening lain', 3);

-- 4 --
SELECT insert_nasabah('Michael Brown', 'L', '1993-07-25', 'Jl. Contoh No. 101', '081234567893', 'michael.brown@example.com', 'Lajang', 'Pegawai Swasta');
SELECT insert_akun('45678', 'Tabungan', 7500.00, '2023-02-10 11:45:00', TRUE, 4);
SELECT insert_transaksi('Debit', 300.00, '2023-04-15 10:30:00', 'Pembayaran tagihan', 4);


-- 5 --
SELECT insert_nasabah('Sophia Lee', 'P', '1992-09-18', 'Jl. Contoh No. 111', '081234567894', 'sophia.lee@example.com', 'Kawin', 'Pengusaha');
SELECT insert_akun('56789', 'Giro', 12000.00, '2023-03-05 14:15:00', TRUE, 5);
SELECT insert_transaksi('Kredit', 1500.00, '2023-05-20 12:30:00', 'Setoran', 5);


-- 6 --
SELECT insert_nasabah('Oliver Wilson', 'L', '1998-11-30', 'Jl. Contoh No. 121', '081234567895', 'oliver.wilson@example.com', 'Lajang', 'Mahasiswa');
SELECT insert_akun('67890', 'Tabungan', 5500.00, '2023-02-25 10:00:00', TRUE, 6);
SELECT insert_transaksi('Debit', 800.00, '2023-04-12 08:45:00', 'Pembayaran tagihan', 6);


-- READ --
--Menampilkan dengan Nama dan Jumlah Saldo masing-masing
SELECT Nasabah.id, Nasabah.nama, SUM(Akun.saldo_akun) AS total_saldo
FROM Nasabah
LEFT JOIN Akun ON Nasabah.id = Akun.id_nasabah
GROUP BY Nasabah.id, Nasabah.nama;

-- Queey dimana menapilkan Nama, No Rek, Saldo maximum dan minimum diantara semua nasabah
SELECT Nasabah.nama, Akun.no_rek, Akun.saldo_akun
FROM Nasabah
INNER JOIN Akun ON Nasabah.id = Akun.id_nasabah
WHERE Akun.saldo_akun = (SELECT MAX(saldo_akun) FROM Akun);

SELECT Nasabah.nama, Akun.no_rek, Akun.saldo_akun
FROM Nasabah
INNER JOIN Akun ON Nasabah.id = Akun.id_nasabah
WHERE Akun.saldo_akun = (SELECT MIN(saldo_akun) FROM Akun);

-- Query dimana hanya menampilkan nasabah dengan pekerjaan Mahasiswa
SELECT Nasabah.nama, Akun.no_rek, Akun.saldo_akun
FROM Nasabah
INNER JOIN Akun ON Nasabah.id = Akun.id_nasabah
WHERE nasabah.pekerjaan ='Mahasiswa' ;

-- UPDATE --
--SALDO MENGGUNAKAN PROCEDURE
CREATE OR REPLACE FUNCTION update_akun_saldo(
    akun_id_param INTEGER,
    new_saldo_param NUMERIC
)
RETURNS VOID AS $$
BEGIN
    UPDATE Akun
    SET saldo_akun = new_saldo_param
    WHERE id = akun_id_param;
END;
$$ LANGUAGE plpgsql;

SELECT update_akun_saldo(1, 12000.00);

-- DELETE --
DELETE FROM Transaksi WHERE id = 1;

-- DROP --
--DROP TABLE nasabah,akun ,transaksi ;

