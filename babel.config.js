module.exports = (api) => {
  api.cache(true);
  return {
    presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: '3.21' } }]],
    include: ["./node_modules/svelte/**", "./src/**"]
  };
};
