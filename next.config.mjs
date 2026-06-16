/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/mudjacking", destination: "/services/mudjacking", permanent: true },
      { source: "/foam-jacking", destination: "/services/foam-jacking", permanent: true },
      { source: "/driveway-leveling", destination: "/services/driveway-leveling", permanent: true },
      { source: "/sidewalk-repair", destination: "/services/sidewalk-repair", permanent: true },
      { source: "/patio-leveling", destination: "/services/patio-leveling", permanent: true },
      {
        source: "/garage-floor-leveling",
        destination: "/services/garage-floor-leveling",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
