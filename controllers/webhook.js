const Flow = require('./flow')
const { Message } = require('./message')
const { WebhookController } = require('@zenvia/sdk')

module.exports = class Webhook {
    
    boot(client, channel_str) {
        const client_channel = client.getChannel(channel_str)
        const webhook = new WebhookController({
            channel: channel_str,
            messageEventHandler: async (messageEvent) => {
                let content = []

                if(Message.isAudio(messageEvent)) {
                    let messages = await Flow.tryRecognizeAudio(messageEvent)
                    content.push(...messages)
                }
                
                if(Message.isText(messageEvent)) {
                    let messages = await Flow.tryRecognizeText(messageEvent)
                    content.push(...messages)
                }
                
                client_channel.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
                    .then((response) => { })
            },
        })

        webhook.on('listening', () => {
            console.info('Webhook is listening')
        })

        webhook.init()
    }

}