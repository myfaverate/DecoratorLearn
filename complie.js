const babel = require('babel-register');

babel({
    plugins: ['transform-decorators-legacy']
});

require('./index.js');
