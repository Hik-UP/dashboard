module.exports = {
    trailingSlash: false,
    devIndicators: {
        autoPrerender: false,
      },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://pro-hikup.westeurope.cloudapp.azure.com/:path*',
          },
        ]
      },
      serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    }
};
