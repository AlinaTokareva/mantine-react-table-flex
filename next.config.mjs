/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  output: 'standalone',
  experimental: {
    missingSuspenseWithCSRBailout: false
  },

  //SASS и стили Mantine
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
  //Для работы с SVG как с компонентами
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            titleProp: true
          }
        }
      ]
    }),

        config.resolve.fallback = {
          fs: false,

    }

    return config
  },
}

export default nextConfig
