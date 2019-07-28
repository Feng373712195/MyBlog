var path = require( 'path' );
var webpack = require( 'webpack' );
const config = require('../config')

module.exports = {
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "react-router-dom",
            "react-router-redux",
            "jquery/dist/jquery.min.js",
            "./semantic/dist/semantic.min.js"
        ]
    },
    output:  {
        path: path.join( config.rootDirPath, 'build/' ),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin( {
            path: path.join( config.rootDirPath, 'build', '[name]-manifest.json' ),
            name: '[name]_library'
        } ),
        new webpack.optimize.UglifyJsPlugin( {
            minimize: true,
            output: {
                comments: false
            },
            compress: {
                warnings: false,
                screw_ie8: true
            }
        } ),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin( {
            'process.env': { NODE_ENV: '"production"' },
            '__DEV__': false,
            '__PRODUCTION__': true
        } )
    ]
};
