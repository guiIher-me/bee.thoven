const handlerMessage = require('./handlerMessage');
const { WebhookController } = require('@zenvia/sdk')

function boot(channel) {
    const zenviaWebhook = new WebhookController({
        channel,
        messageEventHandler: async (messageEvent) => await handlerMessage(channel, messageEvent)
    })

    zenviaWebhook.on('listening', () => {
        console.info('Webhook is listening')
    })

    zenviaWebhook.init()
}

module.exports = boot