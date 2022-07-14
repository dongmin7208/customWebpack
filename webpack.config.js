const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "/src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "static/js/prod.js",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/build", "index.html"),
            minify: false,
        }),
    ],
};
//export default {}
