const path = require('path');

module.exports = {
    entry: './public/js/login.js',  // Path to your main JS file
    output: {
        filename: 'bundle.js',  // Output bundle file name
        path: path.resolve(__dirname, 'public/js/dist')  // Output directory path
    },
    mode: 'development'  // Set to 'production' for minified output
};
