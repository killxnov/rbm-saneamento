/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Adicione os domínios das suas fotos reais aqui depois
    ],
  },
};

module.exports = nextConfig;