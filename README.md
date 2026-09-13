# 🌿 Aetheria — Sustainable Facility Care & Commercial Stewardship

<p align="center">
  <img src="https://skillicons.dev/icons?i=vue,ts,html,css,tailwind,vite,nodejs,git,vscode" alt="Tech Stack Icons" />
</p>

<p align="center">
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue-3.5+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue 3" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
</p>

A modern, high-performance, and responsive corporate landing page built for **Aetheria Facility & Care Ltd.** Featuring enterprise-grade facility management, commercial sanitization, and sustainable surface restoration services.

---

## 🛠️ Tech Stack & Technologies

| Kategori | Teknologi | Deskripsi |
| :--- | :---: | :--- |
| **Frontend Framework** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" width="28" height="28" alt="Vue 3" /><br>[**Vue 3**](https://vuejs.org/) | Modern Reactive Framework dengan Composition API & `<script setup>` |
| **Language** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="28" height="28" alt="TypeScript" /><br>[**TypeScript**](https://www.typescriptlang.org/) | Type safety penuh, autocompletion, dan pemeliharaan kode yang kuat |
| **Markup & Semantic** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="28" height="28" alt="HTML5" /><br>**HTML5** | Semantic tags, SEO Structured Schema JSON-LD & OpenGraph |
| **Styling & Design** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="28" height="28" alt="Tailwind CSS" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="28" height="28" alt="CSS3" /><br>[**Tailwind CSS**](https://tailwindcss.com/) & CSS3 | Utility-first styling, CSS Variables, Glassmorphism, & Micro-animations |
| **Bundler / Tooling** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="28" height="28" alt="Vite" /><br>[**Vite**](https://vitejs.dev/) | Next Generation Frontend Tooling dengan Hot Module Replacement super cepat |
| **Routing** | <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" width="28" height="28" alt="Vue Router" /><br>[**Vue Router 4**](https://router.vuejs.org/) | Client-side routing dengan smooth scroll behavior |
| **Runtime Environment**| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="28" height="28" alt="Node.js" /><br>[**Node.js**](https://nodejs.org/) | JavaScript runtime engine & NPM package management |

---

## 🚀 Fitur Utama & Halaman

- **Home Page (`/`)**:
  - Hero section dinamis dengan visual impact tinggi & CTA interaktif.
  - Value Proposition & Core Pillars.
  - Featured Services preview.
  - Quick Company Overview snippet.
  - Floating WhatsApp Quick Action trigger.
- **About Us (`/about`)**:
  - Storyline perusahaan & rekam jejak.
  - Visi & Misi berkelanjutan.
  - Core Values & Budaya Kerja.
  - Legalitas & Sertifikasi Resmi (ISO Standards).
- **Services (`/services`)**:
  - Katalog layanan komprehensif dengan filter kategori interaktif.
  - Detail spesifikasi layanan & alur pemesanan (*Order Flow / Engagement Steps*).
- **Our Work / Portfolio (`/our-work` / `/portfolio`)**:
  - Galeri proyek terkurasi dengan filter kategori.
  - Klien terkemuka & testimoni kepuasan pelanggan.
- **Contact Us (`/contact`)**:
  - Formulir konsultasi interaktif dengan validasi form.
  - Informasi kontak resmi, jam operasional, dan integrasi peta lokasi interaktif.

---

## 📂 Struktur Proyek

```text
company-profile-1/
├── public/                 # Asset statis publik (favicon, logo, icons.svg)
├── src/
│   ├── assets/             # Asset gambar & ilustrasi lokal
│   ├── components/         # Komponen reusable global (Navbar, Footer, UI Cards)
│   ├── pages/              # Halaman utama aplikasi
│   │   ├── about/          # Sub-komponen halaman About Us
│   │   ├── contact/        # Sub-komponen halaman Contact Us
│   │   ├── home/           # Sub-komponen halaman Home
│   │   ├── portfolio/      # Sub-komponen halaman Portfolio
│   │   └── service/        # Sub-komponen halaman Service
│   ├── router/             # Konfigurasi Vue Router & route definitions
│   ├── App.vue             # Root application component
│   ├── main.ts             # Entry point TypeScript & Vue bootstrapping
│   └── style.css           # Global design tokens, typography, & styling
├── index.html              # Entry HTML & SEO Metadata (OpenGraph, Schema JSON-LD)
├── package.json            # Daftar dependensi & npm scripts
├── tsconfig.json           # Konfigurasi compiler TypeScript
└── vite.config.ts          # Konfigurasi bundler Vite
```

---

## 💻 Memulai Pengembangan Lokal (Getting Started)

### Prasyarat
Pastikan komputer kamu sudah terinstall:
- [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru)
- NPM atau Package Manager pilihan (pnpm / yarn)

### 1. Clone Repository
```bash
git clone https://github.com/Syechan112/aetheria-landing-page.git
cd aetheria-landing-page
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser di alamat lokal yang ditampilkan di terminal (biasanya `http://localhost:5173`).

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build siap deploy akan dibuat di direktori `dist/`.

### 5. Preview Hasil Build
```bash
npm run preview
```

---

## 📄 Lisensi & Hak Cipta
Hak cipta © 2026 **Aetheria Facility & Care Ltd.** Seluruh hak dilindungi undang-undang.
