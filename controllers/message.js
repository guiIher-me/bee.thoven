const {
    FileContent,
    TextContent,
} = require('@zenvia/sdk');

module.exports = class Message {

    constructor() { }

    static isAudio(messageEvent) {
        return messageEvent.message.contents[0].type === 'file' && messageEvent.message.contents[0].fileMimeType.includes('audio')
    }

    static isText(messageEvent) {
        return messageEvent.message.contents[0].type === 'text'
    }

    static getTextFromUser(messageEvent) {
        return messageEvent.message.contents[0].text
    }

    static toFile(message) {
        return new FileContent(message)
    }

    static toText(message) {
        return new TextContent(message)
    }

}