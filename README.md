# Rumpun — Manajemen Orchestra Angklung

Aplikasi sumber terbuka, berbahasa Indonesia, untuk mengelola orchestra angklung. Berjalan sepenuhnya di browser dan dapat dipublikasikan di GitHub Pages. Tidak memerlukan backend, akun, atau proses build.

## Fitur

- Daftar pemain, bagian, informasi kontak, catatan, dan instrumen yang dipegang.
- Bank instrumen awal: Angklung Melodi 0–35 (nomor 0 = F#), Bass berlabel `g`–`f`, dan Angklung Gajah berlabel `G`–`F`.
- Catat jumlah stok untuk setiap label angklung (termasuk beberapa unit dengan nada yang sama), lalu alokasikan jumlah unit yang dipegang setiap pemain.
- Nada acuan instrumen dapat diedit agar cocok dengan penyeteman dan penomoran set angklung orchestra Anda.
- Repertoar lagu dengan komposer, Do=, sistem nada, tempo, tautan partitur, instrumen/bagian, notasi per birama atau frasa, dan catatan latihan.
- Kalender bulanan, absensi pemain (hadir, izin, sakit, alpa), dan timeline dari rangkaian latihan sampai pertunjukan.
- Penyimpanan otomatis di `localStorage` browser.
- Ekspor/impor seluruh data sebagai XML atau JSON.
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

Ekspor XML memiliki root `<rumpun version="1">` dan bagian `<orchestra>`, `<players>`, `<instruments>`, `<songs>`, serta `<calendar>`. Relasi pemain dan lagu terhadap instrumen disimpan sebagai `<instrumentRef>`. XML hasil ekspor dapat diimpor kembali ke Rumpun.

## Batasan saat ini

- Catatan lagu berupa notasi teks. Simpan partitur hasil pindai/PDF di tempat yang Anda kelola dan tambahkan tautannya ke entri lagu.
- Data berada di profil browser masing-masing. Untuk kerja bersama, bagikan berkas ekspor dan impor perubahan secara manual.
- Bank nomor dan nada acuan hanyalah titik awal yang dapat diedit; sesuaikan dengan inventaris dan penyeteman kelompok.

## Lisensi

[MIT](LICENSE)
