const {
    FileContent,
    TextContent,
} = require('@zenvia/sdk');

class MessageHelper {
    static getContent(messageEvent) {
        return messageEvent.message.contents[0]
    }

    static isAudio(message) {
        return message.type === 'file' && message.fileMimeType.includes('audio')
    }

    static isText(message) {
        return message.type === 'text'
    }

    static getFileFromUser(message) {
        return message.fileUrl
    }

    static getTextFromUser(message) {
        return message.text
    }

    static toFile(message, mimeType) {
        return new FileContent(message, mimeType)
    }

    static toText(message) {
        return new TextContent(message)
    }
}

module.exports = MessageHelper
