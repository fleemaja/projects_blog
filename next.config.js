/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
        ],
      },
      async redirects() {
        return [
          {
            source: '/projects',
            destination: '/',
            permanent: false,
          },
        ]
      },
}

module.exports = nextConfig
