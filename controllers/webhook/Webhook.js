const boot = require('./boot')
const getChannel = require('./client/getChannel')
const MessageManager = require('../message/MessageManager')
const Logger = require('../logger/Logger')

module.exports = class Webhook {
    constructor(channelStr) {
        this.channel_str = channelStr
        this.messageManager = null
    }

    boot() {
        try {
            const channel = getChannel(this.channel_str)
            this.messageManager = new MessageManager(channel)
            boot(channel, this.messageManager)
        } catch (error) {
            Logger.error('Webhook', error)
        }
    }
}
