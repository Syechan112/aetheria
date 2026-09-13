# 🌿 Aetheria — Sustainable Facility Care & Commercial Stewardship

[![Vue 3](https://img.shields.io/badge/Vue-3.5+-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance, and responsive corporate landing page built for **Aetheria Facility & Care Ltd.** Featuring enterprise-grade facility management, commercial sanitization, and sustainable surface restoration services.

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

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Type Checking)
- **Routing**: [Vue Router 4](https://router.vuejs.org/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom Modern CSS (CSS Variables, Backdrop Filters, Glassmorphism, Micro-interactions)

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
