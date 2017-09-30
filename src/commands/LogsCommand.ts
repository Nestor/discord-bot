import { Command, Middleware } from 'yamdbf';

const { resolve, expect } = Middleware;

module.exports = class extends Command {
    constructor() {
        super({
            name: 'logs',
            desc: 'Asks a user to provide logs',
            usage: '<prefix>logs <user>',
        });

        this.use(resolve('user: User'));
        this.use(expect('user: User'));
    }

    async action(message, [user]) {
        const sentMessage = await message.channel.send(
            `In order to help you ${user}, we need some logs. Please see http://enderman.atlcdn.net/UploadLogs.gif ` +
                `on how to generate the link. Once done please paste the link here.`,
        );

        // delete message after 24 hours
        sentMessage.delete(60 * 60 * 24 * 1000);

        await sentMessage.react('🇱');
        await sentMessage.react('🇴');
        await sentMessage.react('🇬');
        sentMessage.react('🇸');
    }
};
