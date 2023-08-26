/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

let baseUrl = 'https://example.com'

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  env: {
    BASE_URL: baseUrl,
  },
})

module.exports = nextConfig 

