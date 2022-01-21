const handlerMessage = require('./handlerMessage')
const sendMessageToChannel = require('./sendMessageToChannel')

class MessageManager {
    constructor(channel) {
        this.channel = channel
    }

    async handler(messageEvent) {
        const outputMessages = await handlerMessage(messageEvent)
        sendMessageToChannel(this.channel, messageEvent, outputMessages)
    }
}

module.exports = MessageManager;
