// Mendapatkan nama pengguna dari local storage jika tersedia, jika tidak, gunakan nama default
var username = localStorage.getItem("username") || "Para PEMENANG";

// Ubah teks sambutan dengan nama pengguna
document.querySelector(".title").innerText = "Hi, " + username + "!";



// Ambil elemen formulir
var form = document.querySelector("form");

// Tambahkan event listener pada saat formulir dikirim
form.addEventListener("submit", function(event) {
    // Ambil nilai input dari elemen formulir
    var nama = document.getElementById("nama").value;
    var tgl_lahir = document.getElementById("tgl_lahir").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var pesan = document.getElementById("pesan").value;

    // Validasi jika nama kosong
    if (nama.trim() === "") {
        alert("Nama harus diisi.");
        event.preventDefault(); // Menghentikan pengiriman formulir jika tidak valid
        return;
    }

    // Validasi jika tanggal lahir kosong
    if (tgl_lahir === "") {
        alert("Tanggal lahir harus diisi.");
        event.preventDefault(); // Menghentikan pengiriman formulir jika tidak valid
        return;
    }

    // Validasi jika jenis kelamin belum dipilih
    if (!gender) {
        alert("Jenis kelamin harus dipilih.");
        event.preventDefault(); // Menghentikan pengiriman formulir jika tidak valid
        return;
    }

    // Validasi jika pesan kosong
    if (pesan.trim() === "") {
        alert("Pesan harus diisi.");
        event.preventDefault(); // Menghentikan pengiriman formulir jika tidak valid
        return;
    }

    // Jika formulir valid, simpan nama pengguna ke local storage
    localStorage.setItem("username", nama);
});

document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen-elemen yang akan diisi
    var tanggalHariIniElem = document.getElementById("tanggalHariIni");
    var namaElem = document.getElementById("namaInfo");
    var tanggalLahirElem = document.getElementById("tanggalLahir");
    var jenisKelaminElem = document.getElementById("jenisKelamin");
    var pesanElem = document.getElementById("pesanInfo");

    // Menyimpan elemen formulir yang akan diambil nilainya
    var form = document.querySelector("form");

    // Menambahkan event listener saat formulir dikirim
    form.addEventListener("submit", function(event) {
        // Ambil nilai input dari elemen formulir
        var nama = document.getElementById("nama").value;
        var tgl_lahir = document.getElementById("tgl_lahir").value;
        var gender = document.querySelector('input[name="gender"]:checked');
        var pesan = document.getElementById("pesan").value;

        // Mengisi informasi di sebelah kanan formulir
        var today = new Date().toLocaleDateString("en-US");
        tanggalHariIniElem.textContent = "Tanggal Hari Ini: " + today;
        namaElem.textContent = "Nama: " + nama;
        tanggalLahirElem.textContent = "Tanggal Lahir: " + tgl_lahir;
        jenisKelaminElem.textContent = "Jenis Kelamin: " + (gender ? gender.value : "");
        pesanElem.textContent = "Pesan: " + pesan;

        // Menghentikan pengiriman formulir (untuk tujuan demonstrasi)
        event.preventDefault();
    });
});

const hidden = document.querySelector('.hidden');
document.querySelector('#profile') .onclick = () => {
    hidden.classList.toggle('.hidden');
};