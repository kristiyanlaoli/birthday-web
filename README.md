# 🎀 Birthday Web — Panduan Edit & Deploy

Web ucapan ulang tahun romantis siap pakai. Tidak perlu framework, cukup edit file teks biasa.

---

## 📁 Struktur Folder

```
birthday-web/
├── index.html          ← Halaman utama (isi konten di sini)
├── css/
│   └── style.css       ← Semua tampilan & warna
├── js/
│   ├── main.js         ← Logika interaktif
│   └── particles.js    ← Partikel emoji terbang
├── images/             ← Letakkan foto-foto di sini
│   └── (foto1.jpg, foto2.jpg, dst.)
├── audio/              ← Letakkan file musik di sini (opsional)
│   └── (lagu.mp3)
├── vercel.json         ← Konfigurasi Vercel
└── README.md           ← File ini
```

---

## ✏️ Cara Edit Konten (index.html)

### 1. Nama Penerima
Cari teks `Bunga Cintaku` → ganti dengan nama yang diinginkan.
Ada di beberapa tempat: hero section & closing section.

### 2. Tanggal Ulang Tahun
Cari `24 Mei 2026` → ganti tanggal.

### 3. Nama Pengirim
Cari `Namamu Di Sini` → ganti nama pengirim.

### 4. Isi Surat Cinta
Cari bagian `<!-- 💬 EDIT: Isi pesan -->` di section letter.
Edit paragraf-paragraf di dalam `.letter-body`.

### 5. Foto-Foto
1. Letakkan foto di folder `images/` (contoh: `foto1.jpg`)
2. Di `index.html`, ganti setiap `<div class="gallery-item">` dengan:
```html
<div class="gallery-item">
  <img src="images/foto1.jpg" alt="Kenangan kita" />
</div>
```
Bisa tambah atau kurangi item galeri.

### 6. Alasan Mencintai
Cari section `reasons-section` → edit teks dalam `.reason-card`.
Bisa tambah/hapus card sesukamu.

### 7. Musik (Opsional)
1. Letakkan file mp3 di folder `audio/`
2. Di `index.html`, hapus komentar pada tag `<source>`:
```html
<source src="audio/lagu.mp3" type="audio/mpeg" />
```

---

## 🎨 Cara Ganti Tema Warna (css/style.css)

Edit variabel di bagian `:root`:
```css
:root {
  --color-bg:        #fff5f7;   /* Warna background utama */
  --color-primary:   #ff6b9d;   /* Warna aksen utama (pink) */
  --color-secondary: #ff3d7f;   /* Warna aksen sekunder */
  --color-accent:    #ffd6e7;   /* Warna lembut */
  --color-gold:      #f5c842;   /* Warna emas (closing section) */
  --color-dark:      #3a1a2e;   /* Warna gelap */
  --color-text:      #5a3a4a;   /* Warna teks */
}
```

### Contoh Tema Alternatif:
| Tema | --color-primary | --color-secondary |
|------|----------------|-------------------|
| 💙 Biru | #4da6ff | #1a7fe8 |
| 💚 Hijau | #56cc6a | #2fa845 |
| 💜 Ungu | #a78bfa | #7c3aed |
| 🧡 Oranye | #ff8c42 | #e6611e |

---

## 🌸 Cara Ganti Partikel Emoji (js/particles.js)

Edit array `EMOJIS` dan jumlah `TOTAL`:
```js
const EMOJIS = ['💗', '🌸', '💕', '🌹', '✨'];  // ← ganti emoji
const TOTAL  = 22;   // ← jumlah partikel (semakin banyak = lebih ramai)
```

---

## 🚀 Cara Deploy ke Vercel (Gratis)

### Metode 1: Via GitHub (Recommended)
1. Buat akun [Vercel](https://vercel.com) & [GitHub](https://github.com)
2. Upload folder ini ke GitHub repository baru
3. Di Vercel: klik **"Add New Project"** → import dari GitHub
4. Klik **Deploy** — selesai! Dapat URL gratis.

### Metode 2: Via Vercel CLI
```bash
npm install -g vercel
cd birthday-web
vercel
```

### Metode 3: Drag & Drop
1. Buka [vercel.com](https://vercel.com) → login
2. Drag & drop seluruh folder `birthday-web` ke halaman dashboard
3. Selesai!

---

## 📱 Tips Untuk Klien
- Web sudah responsif untuk HP & desktop
- Foto sebaiknya ukuran < 500KB per foto agar cepat loading
- Musik opsional, klien bisa aktifkan sendiri
- Bisa dibagikan via link WhatsApp/IG

---

## ❓ Troubleshooting

**Foto tidak muncul?**
→ Pastikan nama file persis sama (case-sensitive): `foto1.jpg` ≠ `Foto1.JPG`

**Musik tidak keluar?**
→ Pastikan file mp3 ada di folder `audio/` dan tag `<source>` sudah tidak dikomentari

**Tulisan tidak berubah?**
→ Pastikan save file dan refresh browser (Ctrl+Shift+R)

---

*Dibuat dengan 💗 — Template Birthday Web Romantis*
