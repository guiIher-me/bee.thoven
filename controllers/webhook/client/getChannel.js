const getClient = require('./getClient');

function getChannel(channel_str) {
    const client = getClient();
    const channel = client.getChannel(channel_str)
    return channel
}

module.exports = getChannel;