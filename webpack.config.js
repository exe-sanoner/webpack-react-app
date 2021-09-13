const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/*
module.exports = {
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic'  // 'classic'
                        }

                    ]
                ]
            }
        }]
    }
}
*/

// REFACTORIZADO !!!!

const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
}

const ruleForJavascript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'  // 'classic'
                }

            ]
        ]
    }
}

const rules = [ruleForJavascript, ruleForStyles];

module.exports = (env, argv) => {
    const {mode} = argv;
    const isProduction = mode === 'production';
    
    return {
        // entry: './src/index.js',
        output: {
            filename: isProduction 
                ? '[name].[contenthash].js' 
                : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: { rules },
        devtool: 'source-map'  // Un gran poder, conlleva una gran responsabilidad
    }
}