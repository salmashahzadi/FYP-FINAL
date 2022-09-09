module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
plugins: [
  [
    '@babel/plugin-transform-runtime',
    {
      absoluteRuntime: false,
      corejs: false,
      helpers: true,
      regenerator: true,
      version: '7.0.0-beta.0',
    },
  ],
];
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
