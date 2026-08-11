/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Geliştirme sırasında telefondan (yerel ağ IP'siyle) test edebilmek için.
  // Joker karakterle yazıldı: modem her yeniden başladığında IP değişse bile
  // ayarı elle güncellemek gerekmiyor. Yalnızca yerel ağ adreslerini kapsar.
  allowedDevOrigins: ["192.168.1.*", "192.168.0.*"],
};

export default nextConfig;
