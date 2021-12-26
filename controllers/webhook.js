const Flow = require('./flow')
const { MESSAGES, Message } = require('./message')
const { WebhookController } = require('@zenvia/sdk')

module.exports = class Webhook {
    
    boot(client, channel_str) {
        const client_channel = client.getChannel(channel_str)
        const webhook = new WebhookController({
            channel: channel_str,
            messageEventHandler: async (messageEvent) => await Webhook.handlerMessage(client_channel, messageEvent)
        })

        webhook.on('listening', () => {
            console.info('Webhook is listening')
        })

        webhook.init()
    }

    static async handlerMessage(channel, messageEvent) {
        let content = []

        if(Message.isAudio(messageEvent)) {
            let messages = await Flow.tryRecognizeAudio(messageEvent)
            content.push(...messages)
        } else if(Message.isText(messageEvent)) {
            let messages = await Flow.tryRecognizeText(messageEvent)
            content.push(...messages)
        } else
            content.push(Message.toText(MESSAGES.UNKNOW_MESSAGE_TYPE))
        
        Webhook.sendMessageToChannel(channel, messageEvent, content)
    }

    static sendMessageToChannel(channel, messageEvent, content) {
        channel.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
                    .then((response) => { })
    }

}