/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/api/tcbs/index/:path*',
                destination: 'https://athenaaws.tcbs.com.vn/:path*' // Proxy to Backend
            },
            {
                source: '/api/tcbs/stock/:path*',
                destination: 'https://apipubaws.tcbs.com.vn/:path*' // Proxy to Backend
            },
            {
                source: '/api/vnexpress/:path*',
                destination: 'https://vnexpress.net/:path*' // Proxy to Backend
            }
        ]
    }
}

module.exports = nextConfig
