const concurrently = require('concurrently');

concurrently([
    { command: 'nodemon -e js,vue --watch src -x \'npm run build:designer-local\'', name: 'watch:build', prefixColor: 'blue' },
    { command: 'http-server public', name: 'watch:serve', prefixColor: 'green' },
]);
