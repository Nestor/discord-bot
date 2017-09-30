const config = require('../config/config.json');

console.log(Buffer.from(JSON.stringify(config)).toString('base64'));
