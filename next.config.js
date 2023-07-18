// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["images.pexels.com"],
//       },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Link',
            value: '<link rel="icon" href="/favicon.ico" />',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

