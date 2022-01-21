const Flow = require('../flow')
const { MessageHelper } = require('../MessageHelper');
const sendMessageToChannel = require('./sendMessageToChannel');

async function handlerMessage(channel, messageEvent) {
    let content = []

    if(MessageHelper.isAudio(messageEvent)) {
        let messages = await Flow.tryRecognizeAudio(messageEvent)
        content.push(...messages)
    } else if(MessageHelper.isText(messageEvent)) {
        let messages = await Flow.tryRecognizeText(messageEvent)
        content.push(...messages)
    } else
        content.push(MessageHelper.toText(MESSAGES.UNKNOW_MESSAGE_TYPE))

    sendMessageToChannel(channel, messageEvent, content)
}

module.exports = handlerMessage
