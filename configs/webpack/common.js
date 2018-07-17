// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'components': resolve('src/components'),
            'assets': resolve('src/assets'),
            'config': resolve('src/config'),
            'interfaces': resolve('src/interfaces'),
            'reducers': resolve('src/reducers'),
            'actions': resolve('src/actions'),
        },
    },
    context: resolve(__dirname, '../../src'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'awesome-typescript-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader',],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],
            },
        ],
    },
    plugins: [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new HtmlWebpackPlugin({template: 'index.html.ejs'}),
        new CopyWebpackPlugin([
            {from:'assets/favicons', to:'../dist/favicons'},
            {from:'assets/img/loader.gif', to:'../dist/img/loader.gif'},
        ]),
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    performance: {
        hints: false,
    },

};
