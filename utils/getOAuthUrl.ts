const config = require('../config/config.json');

console.log(
    `https://discordapp.com/oauth2/authorize?client_id=${config.client_id}&scope=bot&permissions=1211628550`,
);
