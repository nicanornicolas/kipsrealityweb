// Plugin to ignore CSS imports in Node.js builds
export const ignoreCssPlugin = {
  name: 'ignore-css',
  setup(build) {
    // Handle .css and .module.css files
    build.onLoad({ filter: /\.(css|module\.css)$/ }, () => {
      return {
        contents: 'module.exports = {};',
        loader: 'js',
      };
    });
  },
};