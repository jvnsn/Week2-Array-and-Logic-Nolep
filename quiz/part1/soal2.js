let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    let tanggalLahir = input[3].split('/');
    let bulan = '';
    switch(tanggalLahir[1]) {
        case '01': bulan = "Januari"; break;
        case '02': bulan = "Februari"; break;
        case '03': bulan = "Maret"; break;
        case '04': bulan = "April"; break;
        case '05': bulan = "Mei"; break;
        case '06': bulan = "Juni"; break;
        case '07': bulan = "Juli"; break;
        case '08': bulan = "Agustus"; break;
        case '09': bulan = "September"; break;
        case '10': bulan = "Oktober"; break;
        case '11': bulan = "November"; break;
        case '12': bulan = "Desember"; break;
    }
    console.log(bulan);
    
    console.log([tanggalLahir[2], tanggalLahir[0], tanggalLahir[1]]);

    console.log(tanggalLahir.join('-'));

    let nama = input[1].slice(0, 15);
    console.log(nama);

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */