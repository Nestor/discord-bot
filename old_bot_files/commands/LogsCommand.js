import BaseCommand from './BaseCommand';

/**
 * Asks someone to submit logs.
 */
class LogsCommand extends BaseCommand {
    /**
     * This event method we should listen for.
     *
     * @type {string}
     * @memberof LogsCommand
     */
    method = 'message';

    /**
     * The pattern to match against. If the message matches this pattern then we will respond to it with the action
     * method.
     *
     * @type {RegExp}
     * @memberof LogsCommand
     */
    pattern = /^!logs/;

    /**
     * The function that should be called when the event is fired.
     *
     * @param {string} action
     * @param {Message} message
     * @memberof LogsCommand
     */
    async action(action, message) {
        message.delete();

        const user = message.mentions.users.first();

        if (!user) {
            return;
        }

        const sentMessage = await message.channel.send(
            `In order to help you ${user}, we need some logs. Please see http://enderman.atlcdn.net/UploadLogs.gif ` +
                `on how to generate the link. Once done please paste the link here.`
        );

        // delete message after 24 hours
        sentMessage.delete(60 * 60 * 24 * 1000);

        await sentMessage.react('🇱');
        await sentMessage.react('🇴');
        await sentMessage.react('🇬');
        sentMessage.react('🇸');
    }
}

export default LogsCommand;
