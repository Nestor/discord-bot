import * as fs from 'fs';
import * as path from 'path';

function getEnvironmentConfig() {
    if (process.env.DISCORD_BOT_CONFIG) {
        const buffer = Buffer.from(process.env.DISCORD_BOT_CONFIG, 'base64');
        const json = JSON.parse(buffer.toString('utf-8'));

        return json;
    }

    return {};
}

function getConfig() {
    try {
        const configPath = path.resolve(__dirname, '../config/config.json');

        fs.accessSync(configPath);

        return JSON.parse(fs.readFileSync(configPath).toString('utf-8'));
    } catch (e) {
        return {};
    }
}

const config = getConfig();

const environmentConfig = getEnvironmentConfig();

export default Object.assign({}, config, environmentConfig);
