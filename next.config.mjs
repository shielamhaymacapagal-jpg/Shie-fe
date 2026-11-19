/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // New portfolio design (public/home.html) is served at "/".
  // The previous Next.js page (app/page.tsx) is kept in the repo for easy rollback:
  // delete this rewrite to bring the old design back.
  async rewrites() {
    return {
      beforeFiles: [{ source: '/', destination: '/home.html' }],
    }
  },
}

export default nextConfig
