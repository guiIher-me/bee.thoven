const Recognizer = require('../recognize/Recognizer')
const MessageHelper = require('./MessageHelper')

async function handlerMessage(messageEvent) {
    const inputMessage = MessageHelper.getContent(messageEvent);
    const outputMessages = []

    if(MessageHelper.isAudio(inputMessage)) {
        let messages = await Recognizer.tryRecognizeAudio(inputMessage)
        outputMessages.push(...messages)
    } else if(MessageHelper.isText(inputMessage)) {
        let messages = await Recognizer.tryRecognizeText(inputMessage)
        outputMessages.push(...messages)
    } else
        outputMessages.push(MessageHelper.toText(MESSAGES.UNKNOW_MESSAGE_TYPE))

    return outputMessages;
}

module.exports = handlerMessage
