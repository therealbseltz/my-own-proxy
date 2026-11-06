const cors_anywhere = require('cors-anywhere');
const host = '0.0.0.0';
const port = process.env.PORT || 8080;

cors_anywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: []
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
