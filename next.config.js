/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript:{
        ignoreBuildErrors : true, // Ignore type errors during build time and continue to run the app
    }
}

module.exports = nextConfig
