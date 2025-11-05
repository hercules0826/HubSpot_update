/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No postcss configuration used
}

// module.exports = nextConfig;
module.exports = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

