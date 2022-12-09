/** @type {import('next').NextConfig} */
module.exports={
  nextConfig : {
  reactStrictMode: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  experimental: { images: { layoutRaw: true } }
}
