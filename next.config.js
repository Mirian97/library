/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/livros',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['books.google.com']
  }
}

module.exports = nextConfig
