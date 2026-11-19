# Rumpun Orchestra Management

<p align="center">
  <a href="https://japutraa.github.io/rumpun-angklung-management/">
    <img src="https://img.shields.io/badge/Buka%20aplikasi-GitHub%20Pages-24543D?style=for-the-badge" alt="Buka Rumpun di GitHub Pages">
  </a>
</p>

Aplikasi open-source berbahasa Indonesia untuk membantu kelompok angklung mengelola pemain, instrumen, repertoar, latihan, dan penampilan. Rumpun berjalan langsung di browser tanpa server, akun, atau proses build.

**Dibuat dan dikelola oleh Adrian Janitra Putra.**

## Mulai menggunakan

Buka tombol **Buka aplikasi** di atas, atau kunjungi [Rumpun di GitHub Pages](https://japutraa.github.io/rumpun-angklung-management/). Aplikasi dapat digunakan langsung di desktop maupun ponsel.

Untuk menjalankannya dari salinan lokal, unduh atau clone repository ini, lalu buka `index.html`. Jika browser membatasi fitur saat membuka berkas lokal, jalankan server statis:

```sh
python3 -m http.server 8000
```

Kemudian buka <http://localhost:8000>.

## Fitur

### Pemain dan pembagian instrumen

- Simpan nama, bagian atau suara, kontak, catatan, serta instrumen yang dipegang setiap pemain.
- Catat jumlah unit per instrumen dan alokasikan jumlahnya ke pemain.
- Aplikasi menghitung persediaan, jumlah yang sudah dipegang, dan sisa unit yang tersedia.
- Lihat nada instrumen dan kaitannya dengan lagu-lagu dalam repertoar.

### Inventaris instrumen

Inventaris dibagi menjadi **Set Angklung** dan **Alat Tambahan (AlTam)**. Kategori Set Angklung mencakup:

- Melodi 0–30 dan Melodi tambahan 31–35.
- Bass g–f dan Gajah G–F# (termasuk nada F#2).
- Accomp Besar dan Accomp Kecil untuk 48 label akor: 12 nada kromatis (C sampai B) dengan empat jenis, yaitu dominan 7, minor (m), diminished (dim), dan suspended (sus). Contoh: C7, C#7, D7 sampai B7; serta Cm, C#m, Dm sampai Bm.
- Alat Tambahan seperti Contrabass, Violin, atau Gitar dapat dicatat terpisah.

Setiap instrumen dapat memiliki jumlah unit, nada atau tuning, catatan, serta kondisi. Akor minor, dim, dan sus memakai tiga tabung; akor 7 memakai empat tabung.

### Repertoar dan notasi

- Catat judul, komposer, nada dasar `Do=`, sistem nada, tempo, tautan partitur, instrumen, serta catatan latihan.
- Simpan notasi sebagai teks per birama atau frasa; beberapa bagian dapat dicatat sebagai lapisan yang berbunyi serentak.
- Aplikasi menampilkan konversi nada relatif terhadap `Do=`: `/` untuk setengah laras di atas, `\` untuk setengah laras di bawah, `^` untuk oktaf atas, dan `.` untuk oktaf bawah. Contoh saat `Do=C`: C# = 1/, Db = 2\\, C5 = 1^, dan C3 = 1..
- Nada absolut tiap instrumen dapat dicatat atau disesuaikan saat mengelola instrumen.

### Kalender dan kehadiran

- Tambahkan latihan, penampilan, dan agenda lainnya.
- Atur pengulangan mingguan, dua mingguan, atau bulanan sampai tanggal yang dipilih.
- Catat kehadiran pemain pada tiap agenda.
- Gunakan ringkasan dan timeline untuk melihat agenda mendatang serta persiapan penampilan.

### Data, tampilan, dan cadangan

- Data tersimpan otomatis di penyimpanan lokal browser.
- Ekspor atau impor seluruh data dalam format XML atau JSON melalui menu **Ekspor & cadangan**.
- Tema terang dan gelap serta tata letak responsif tersedia.
- Berkas contoh berisi 45 profil pemain dan data repertoar: [contoh/rumpun-demo-orchestra-45-anggota.xml](contoh/rumpun-demo-orchestra-45-anggota.xml).

## Privasi dan pencadangan

Data disimpan di browser dan perangkat yang sedang digunakan. Data tidak otomatis diunggah atau disinkronkan dengan anggota lain. Buat ekspor XML/JSON secara berkala untuk menyimpan cadangan atau memindahkan data ke browser lain.

Saat mengimpor berkas, data lokal yang sedang terbuka akan diganti dengan isi berkas tersebut. Pastikan sudah mengekspor cadangan sebelum mengimpor jika data saat ini masih diperlukan.

## GitHub Pages

Aplikasi ini berupa berkas statis dan tidak memerlukan proses build. Untuk menerbitkan fork atau salinan repository:

1. Buka **Settings → Pages** di repository GitHub.
2. Pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/(root)`, lalu simpan.
4. Setelah deployment selesai, GitHub Pages akan menampilkan URL aplikasi di halaman Pages.

## Struktur ekspor XML

Ekspor menggunakan root `<rumpun version="12">` dengan bagian `<orchestra>`, `<players>`, `<instruments>`, `<songs>`, dan `<calendar>`. Relasi instrumen pemain menyimpan jumlah unit, lagu menyimpan nada dasar dan notasi, serta agenda dapat menyertakan data kehadiran. Ekspor Rumpun dapat diimpor kembali melalui menu **Ekspor & cadangan**.

## Batasan

- Notasi lagu berupa teks. Simpan PDF atau gambar partitur di tempat yang Anda kelola, lalu tambahkan tautannya pada data lagu.
- Kolaborasi belum disinkronkan langsung antarperangkat; pertukaran data dilakukan dengan ekspor dan impor.
- Data instrumen awal merupakan contoh. Sesuaikan inventaris, jumlah unit, dan nada dengan instrumen milik kelompok Anda.

## Lisensi

Dirilis di bawah [MIT License](LICENSE).
