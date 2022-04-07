const Path = require("path");

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name]_[local]_[hash:base64:5]',
        importLoaders: 2,
        camelCase:true,
        sourceMap: false, // turned off as causes delay
    }
}

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: "global",
        importLoaders: 2,
        camelCase:true,
        sourceMap: false, // turned off as causes delay
    }
}

module.exports = {
    module: {
        rules:
            [
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /\.module\.(sa|sc|c)ss$/,
                    use: [CSSLoader, "sass-loader"]
                },
                {
                    test: /\.module\.(sa|sc|c)ss$/,
                    use: [CSSModuleLoader, "sass-loader"]
                },
                {
                    test: /\.svg$/,
                    include: [Path.join(__dirname, "src/layout/AboutUs")],
                    use: ['@svgr/webpack'],
                },
            ]
    },
}