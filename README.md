# Rumpun — Manajemen Orchestra Angklung

Aplikasi sumber terbuka, berbahasa Indonesia, untuk mengelola orchestra angklung. Berjalan sepenuhnya di browser dan dapat dipublikasikan di GitHub Pages. Tidak memerlukan backend, akun, atau proses build.

## Fitur

- Daftar pemain, bagian, informasi kontak, catatan, dan instrumen yang dipegang.
- Set Angklung mencakup Melodi 0–30 (F#3–C6), Melodi tambahan 31–35 (C#6–F6), Bass g–f (G2–F3), Gajah G–F (G1–F2), dan set Accomp (Chord) standar berpasangan Accomp Besar/Kecil untuk 17 label akor. Alat Tambahan (AlTam) dikelola terpisah, misalnya Contrabass, Violin, dan Gitar.
- Catat jumlah unit persediaan untuk setiap label angklung (termasuk beberapa unit dengan nada yang sama), lalu alokasikan jumlah unit yang dipegang setiap pemain.
- Set Accomp bawaan berisi akor G, A, B, C, Dm, Em, Fm, G7, A7, A#7, B7, C7, D7, E7, F7, F#7, dan Bb (Bes). Setiap akor tersedia sebagai Accomp Besar (wilayah rendah) dan Accomp Kecil (wilayah lebih tinggi); ukuran tercantum pada nama instrumen. Triad memakai 3 tabung, akor dominan 7 memakai 4 tabung. Catatan teknik: kurulung (getar panjang), cetok (aksen pendek), dan tangkep (menahan tabung septim saat yang diminta hanya triad).
- Pisahkan inventaris Set Angklung dari Alat Tambahan (AlTam), dengan kategori khusus untuk melodi tambahan 31–35 dan set Accomp Besar/Kecil.
- Setiap pitch mutlak ditampilkan bersama konversi angka relatif terhadap Do= lagu. Konversi notasi menggunakan angka relatif: `/` untuk nada setengah laras lebih tinggi (C# = 1/ saat Do=C), `\` untuk setengah laras lebih rendah (Db = 2\), `^` untuk oktaf atas, dan `.` untuk oktaf bawah. Contohnya C5 = 1^ dan C3 = 1.. saat Do=C. Pitch acuan dapat diedit untuk mencocokkan set orchestra Anda.
- Repertoar lagu dengan komposer, Do=, sistem nada, tempo, tautan partitur, instrumen/bagian, notasi per birama atau frasa, dan catatan latihan. Cakupan instrumen dapat meliputi seluruh 36 nada Melodi, Bass g–f, Gajah G–F, serta partitur berlapis yang menunjukkan beberapa bagian berbunyi serentak.
- Tema gelap dengan palet hijau dan aksen kuning yang sama; pilihan tema disimpan di browser.
- Kalender latihan dengan pengulangan mingguan, dua mingguan, atau bulanan sampai tanggal yang dipilih. Setiap tanggal memiliki absensinya sendiri.
- Ringkasan timeline menuju penampilan berikutnya, jumlah latihan terjadwal sebelumnya, dan peringatan jika penampilan berjarak 14 hari atau kurang.
- Penyimpanan otomatis di `localStorage` browser.
- Ekspor/impor seluruh data sebagai XML atau JSON. Contoh XML fiktif berisi 45 pemain, 20 lagu, dan pembagian instrumen lengkap tersedia di [`contoh/rumpun-demo-orchestra-45-anggota.xml`](contoh/rumpun-demo-orchestra-45-anggota.xml).
- Tata letak responsif untuk desktop dan ponsel.

## Menjalankan secara lokal

Buka `index.html` di browser modern. Untuk pengalaman browser yang lebih konsisten, jalankan server statis sederhana dari folder proyek:

```sh
python3 -m http.server 8000
```

Lalu buka <http://localhost:8000>.

## Deploy dengan GitHub Pages

1. Buat repository GitHub dan unggah isi repository ini ke branch `main`.
2. Buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/ (root)`, lalu pilih **Save**.

GitHub Pages akan menyajikan `index.html` langsung; tidak ada build step.

## Data dan privasi

Data orchestra tersimpan di penyimpanan lokal browser pada perangkat yang sedang digunakan. Data tidak otomatis disinkronkan dengan pemain lain atau dikirim ke server. Gunakan **Ekspor & cadangan** untuk membuat XML/JSON. Impor berkas akan menggantikan data lokal yang sedang terbuka.

## Struktur XML

Ekspor XML memiliki root `<rumpun version="9">` dan bagian `<orchestra>`, `<players>`, `<instruments>`, `<songs>`, serta `<calendar>`. Penugasan pemain menyimpan jumlah unit per label, absensi disertakan, dan lagu menyimpan Do= beserta notasi. Relasi lagu terhadap instrumen disimpan sebagai `<instrumentRef>`. Contoh repertoar mencantumkan seluruh 36 label Melodi, 11 Bass, 11 Gajah, dan enam unit Accomp per lagu, serta contoh enam lapisan notasi serentak. XML hasil ekspor dapat diimpor kembali ke Rumpun.

## Batasan saat ini

- Catatan lagu berupa notasi teks. Simpan partitur hasil pindai/PDF di tempat yang Anda kelola dan tambahkan tautannya ke entri lagu.
- Data berada di profil browser masing-masing. Untuk kerja bersama, bagikan berkas ekspor dan impor perubahan secara manual.
- Bank nomor dan nada acuan hanyalah titik awal yang dapat diedit; sesuaikan dengan inventaris dan penyeteman kelompok.

## Lisensi

[MIT](LICENSE)
