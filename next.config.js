const path = require('path');
// const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
// const withVanillaExtract = createVanillaExtractPlugin();

/** Next.jsの設定値 */
const nextConfig = {
  /** WebPack の設定を追加 */
  webpack: (config) => {
    // Vue と同じように 「@ = src/」に設定する。
    // => モジュールのパス解決とエイリアスを設定している。
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'emire2024.s3.ap-northeast-1.amazonaws.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  // output: 'export',
  // trailingSlash: true,
};

module.exports = nextConfig;
// module.exports = withVanillaExtract(nextConfig);
