const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './js/main.js',
    script: './js/script.js',
    'progress-bar': './js/progress-bar.js',
    'insight-embed': './js/insight-embed.js',
    'all.min': './js/all.min.js',
    'mdb.min': './js/mdb.min.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...[
      "index.html",
      "contact-us.html",
      "data-collection.html",
      "great-work.html",
      "holiday-fever.html",
      "holiday-fever20.html",
      "insight-on-brand.html",
      "process.html",
      "team.html",
      "work-one.html",
      "work-two.html",
      "work-three.html",
      "work-four.html",
      "work-five.html",
      "work-six.html",
    ].map((template) => {
      return new HtmlWebpackPlugin({
        filename: template,
        template: `./${template}`,
        chunks: ["main", "mdb.min", "script"], // Adjust chunks as needed for each template
        minify: false,
      });
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
  },
};
