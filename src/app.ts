import * as path from 'path';
import { Client } from 'yamdbf';

import config from './config';

const client = new Client({
    commandsDir: path.join(__dirname, 'commands'),
    token: config.client_token,
    owner: config.owners,
    readyText: 'Client Ready!',
    disableBase: ['eval', 'eval:ts', 'setlang', 'setprefix'],
    pause: true,
}).start();

client.on('pause', () => {
    client.setDefaultSetting('prefix', config.command_prefix).then(() => client.emit('continue'));
});

client.on('clientReady', () => {
    // const botTestingChannel = client.channels.find(channel => {
    //     return channel.name === config.bot_testing_channel;
    // });
    // if (botTestingChannel) {
    //     botTestingChannel.send("I've restarted, just FYI");
    // }
});
