const Logger = require('../logger/Logger')

function sendMessageToChannel(channel, messageEvent, content) {
    channel.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
        .then((response) => { Logger.info('sendMessageToChannel', 'Mensagem enviada para o canal') })
}

module.exports = sendMessageToChannel
