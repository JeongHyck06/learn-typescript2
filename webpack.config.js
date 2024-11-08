const path = require('path');

module.exports = {
    // entry: './dist/src/main.js',
    entry: './src/main.ts',
    output: {
        path: path.join(__dirname, 'out'),
        filename: 'result.js',
    },

    mode: 'development',

    resolve: {
        extensions: ['.js', '.ts'],
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            '@lib': path.join(__dirname, './src/lib'),
        },
    },

    module: {
        rules: [
            {
                test: /\.ts$/, //*.ts
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
