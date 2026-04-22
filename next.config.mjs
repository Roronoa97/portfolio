/** @type {import('next').NextConfig} */

const basePath = process.env.BASE_PATH?.trim()

const nextConfig = {
    ...(basePath ? { basePath } : {})
};

export default nextConfig;
