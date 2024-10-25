import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const MDXNextConfig = {
    reactStrictMode: false,

    experimental: {
        missingSuspenseWithCSRBailout: false
    },

    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

    //SASS и стили Mantine
    sassOptions: {
        prependData: '@import "./_mantine.scss";',
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

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

export default withMDX(MDXNextConfig)
