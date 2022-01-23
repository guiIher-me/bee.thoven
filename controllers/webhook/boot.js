const { WebhookController } = require('@zenvia/sdk')
const Logger = require('../logger/Logger')
function boot(channel, messageManager) {
    const zenviaWebhook = new WebhookController({
        channel,
        messageEventHandler: async (messageEvent) => await messageManager.handler(messageEvent)
    })

    zenviaWebhook.on('listening', () => {
        console.log('\n\n')
        Logger.info('boot', 'Webhook is listening')
    })

    zenviaWebhook.init()
}

module.exports = boot
