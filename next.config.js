/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/kontakt",
        destination: "/contact",
      },
      {
        source: "/sluzba/:path*",
        destination: "/service/:path*",
      },
      {
        source: "/projekty/:path*",
        destination: "/projects/:path*",
      },
      {
        source: "/projekt/:path*",
        destination: "/project/:path*",
      },
      {
        source: "/clanky/:path*",
        destination: "/articles/:path*",
      },
      {
        source: "/o-nas",
        destination: "/about",
      },
      {
        source: "/kontakt",
        destination: "/contact",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
