/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  const { transformer, resolver: defaultResolver } = config;

  config.transformer = {
    ...transformer,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  };
  config.resolver = {
    ...defaultResolver,
    sourceExts: [...defaultResolver.sourceExts, "cjs"],
  };

  return config;
})();
