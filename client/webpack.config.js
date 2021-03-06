config = {
  entry: "./src/index.js", 
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }, 
  module: {
    loaders: [{
      test: /\.jsx?$/, 
      exclude: /(node_modules | bower_components)/, 
      loader: 'babel', 
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}

module.exports = config;

// config = {
//   entry: "./src/app.js",
//   output: {
//     filename: "bundle.js",
//     path: "./build"
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module:{
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules | bower_components)/,
//         loader: 'babel', // 'babel-loader' is also a legal name to reference
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map'
// }

// module.exports = config;