const Recognizer = require('../recognize/Recognizer')
const MessageHelper = require('./MessageHelper')
const MESSAGES = require('./messages.enum')
const Logger = require('../logger/Logger')

async function handlerMessage(messageEvent) {
    const inputMessage = MessageHelper.getContent(messageEvent);
    const outputMessages = []

    if(MessageHelper.isAudio(inputMessage)) {
        Logger.info('handlerMessage', 'Audio Recebido')
        let messages = await Recognizer.tryRecognizeAudio(inputMessage)
        outputMessages.push(...messages)
    } else if(MessageHelper.isText(inputMessage)) {
        console.log('\n')
        Logger.info('handlerMessage', 'Texto Recebido')
        let messages = await Recognizer.tryRecognizeText(inputMessage)
        outputMessages.push(...messages)
    } else {
        Logger.warn('handlerMessage', 'Tipo de Mensagem Não Identificado')
        outputMessages.push(MessageHelper.toText(MESSAGES.UNKNOW_MESSAGE_TYPE))
    }

    return outputMessages;
}

module.exports = handlerMessage
