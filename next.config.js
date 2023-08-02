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
  }
}

module.exports = nextConfig
