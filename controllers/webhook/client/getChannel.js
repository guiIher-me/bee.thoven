const getClient = require('./getClient')

function getChannel(channelStr) {
    const client = getClient()
    const channel = client.getChannel(channelStr)
    return channel
}

module.exports = getChannel
