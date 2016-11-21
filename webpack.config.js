var config = {
   entry: './components/main.js',
	
   output: {
      path:'./build',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['react', 'es2015',  'stage-0']
            }
         }
      ]
   }
}

module.exports = config;