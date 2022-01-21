const { WebhookController } = require('@zenvia/sdk')

function boot(channel, messageManager) {
    const zenviaWebhook = new WebhookController({
        channel,
        messageEventHandler: async (messageEvent) => await messageManager.handler(messageEvent)
    })

    zenviaWebhook.on('listening', () => {
        console.info('Webhook is listening')
    })

    zenviaWebhook.init()
}

module.exports = boot
