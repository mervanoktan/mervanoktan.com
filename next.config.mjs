/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Geliştirme sırasında telefondan (yerel ağ IP'siyle) test edebilmek için.
  // Modemin IP dağılımı değişirse buradaki adresi güncelle.
  allowedDevOrigins: ["192.168.1.59"],
};

export default nextConfig;
