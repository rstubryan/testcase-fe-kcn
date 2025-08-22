# KCN Front End Assessment

Aplikasi Next.js yang mengimplementasikan function grouping (pengelompokan berdasarkan fungsi/domain aplikasi) untuk struktur folder, atomic design untuk sistem komponen, serta konsep shadcn/ui, React Hook Form, dan Zod (tanpa library eksternal, hanya pure Next.js dan React).

## Deployment

Aplikasi dapat diakses pada:

- **Production**: [https://kcn.rstubryan.site/](https://kcn.rstubryan.site/)

## Technology Stack

- **Framework**: Next.js (App Router)
- **UI/Styling**: Tailwind CSS, Atomic Design, Shadcn UI-like components
- **State Management**: React useState
- **Form Handling**: Custom React Hook Form & Zod-like validation (tanpa library)
- **API**: Fetch API bawaan Next.js
- **Image Optimization**: next/image
- **Runtime**: Bun.js

## Project Structure

```
testcase-fe-kcn/
├── src/
│   ├── app/                # Next.js App Router (routing, layout, pages)
│   ├── components/         # Atomic Design System
│   │   ├── atoms/          # Elemen UI dasar (Button, Input, Typography, Card, dsb)
│   │   ├── molecules/      # Komponen gabungan sederhana (InputForm, dsb)
│   │   ├── organisms/      # Komponen kompleks (RegisterForm, dsb)
│   │   └── templates/      # Layout halaman (RegisterLayout, dsb)
│   ├── data/               # Data statis (products.json, dsb)
│   ├── lib/                # Utility/helper (fetcher, formatter, dsb)
│   └── services/           # Service layer (API handler, logic per fungsi/domain)
├── public/                 # Static assets
└── README.md
```

## Function Grouping & Atomic Design

- **Function Grouping**: Folder `(protected)` dan `(public)` mengelompokkan komponen berdasarkan fungsi/domain aplikasi, seperti halaman publik (artikel, user) dan halaman terproteksi.
- **Atomic Design**: Komponen UI dibagi menjadi atoms, molecules, organisms, dan templates untuk skalabilitas dan reusability.
- **Shadcn UI-like**: Komponen atoms/molecules/organisms dibuat reusable dan konsisten yang sama dengan shadcn/ui.

## Fitur & Implementasi

### 1. Halaman Statis (Static Generation)

- Halaman artikel (`/app/blog/page.jsx`) mengambil data dari API eksternal (`jsonplaceholder.typicode.com/posts`) secara statis (SSG).
- Menampilkan judul dan isi artikel.
- Styling menggunakan Tailwind CSS.

### 2. Routing Dinamis & SSR

- Halaman utama (`/app/user/page.jsx`) menampilkan daftar user dari API eksternal.
- Halaman detail user (`/app/user/[id]/page.jsx`) menggunakan dynamic route dan server-side rendering (SSR) untuk fetch data user berdasarkan ID.

### 3. API Routes

- Endpoint API custom (`/app/api/product/route.js`) mengembalikan data produk dari file JSON lokal (`/src/data/products.json`).
- Data dikembalikan dalam format JSON.

### 4. Formulir & State Management

- Halaman register menggunakan form dengan input nama, email, password.
- State dikelola dengan useState (mirip React Hook Form).
- Validasi form custom (mirip Zod).
- Data input ditampilkan di bawah form setelah submit.

### 5. Image Optimization

- Halaman galeri gambar menggunakan array URL gambar.
- Setiap gambar dirender dengan komponen `next/image` untuk optimasi.
- Layout grid, ukuran gambar diatur responsif.

## Getting Started

1. Clone repository ini.
2. Install dependencies: `bun install`.
3. Jalankan development server: `bun dev`.
4. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Improvement

- Menggunakan App Router (`/src/app/`) untuk terbaru dari Next.js.
- Struktur folder mengikuti function grouping dan atomic design.
- Komponen UI dibuat reusable dan konsisten (shadcn/ui-like).
- Validasi form dan manajemen state dibuat custom tanpa library eksternal.

## User Features

- Lihat daftar artikel (SSG).
- Lihat daftar user & detail user (SSR, dynamic routing).
- Konsumsi API produk data lokal.
- Formulir register dengan validasi.
- Galeri gambar dengan optimasi.

---

Proyek ini dibuat sebagai bagian dari assessment Front End Developer, dengan penekanan pada struktur kode yang scalable, maintainable, dan best practice modern React/Next.js.