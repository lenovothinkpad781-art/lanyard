# Lanyard Request Portal

Website statis + Vercel Function untuk input data lanyard karyawan dan dashboard admin.

## Route

- `/` halaman user untuk submit pengajuan.
- `/admin/login/` halaman login admin.
- `/admin/` dashboard admin.
- `/api/requests` API database untuk data pengajuan.

## Deploy ke Vercel

1. Upload project ini ke GitHub.
2. Import repository ke Vercel.
3. Tambahkan Postgres database dari Vercel Marketplace, misalnya Neon atau Prisma Postgres.
4. Tambahkan Vercel Blob store dari Vercel Storage.
5. Pastikan Vercel project punya environment variable `DATABASE_URL` atau `POSTGRES_URL`.
6. Pastikan Vercel project punya environment variable `BLOB_READ_WRITE_TOKEN`.
7. Deploy.

Tabel `lanyard_requests` akan dibuat otomatis saat API pertama kali dipanggil.

## Catatan

Foto disimpan di Vercel Blob. Database Postgres hanya menyimpan metadata dan URL foto agar dashboard admin tetap ringan serta tombol preview/download foto tetap berfungsi.
