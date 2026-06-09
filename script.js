function buatSurat() {

    document.getElementById("s_nomor").textContent =
        document.getElementById("nomor").value;

    document.getElementById("s_hal").textContent =
        document.getElementById("hal").value;

    document.getElementById("s_sifat").textContent =
        document.getElementById("sifat").value;

    document.getElementById("s_kepada").textContent =
        document.getElementById("kepada").value;

    document.getElementById("s_tujuan").textContent =
        document.getElementById("tujuan").value;

    document.getElementById("s_isi").textContent =
        document.getElementById("isi").value;

    document.getElementById("s_hari").textContent =
        document.getElementById("hari").value;

    document.getElementById("s_waktu").textContent =
        document.getElementById("waktu").value;

    document.getElementById("s_tempat").textContent =
        document.getElementById("tempat").value;

    const tanggal = new Date();

    document.getElementById("tanggal").textContent =
        tanggal.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    document.getElementById("surat").style.display = "block";
}

function masukAplikasi() {

    document.getElementById("landing-page").style.display = "none";

    document.querySelector(".form-container").style.display = "block";

    document.querySelector(".aksi").style.display = "block";
}