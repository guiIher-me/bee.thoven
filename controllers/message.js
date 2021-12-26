const {
    FileContent,
    TextContent,
} = require('@zenvia/sdk');

const MESSAGES = {
    'ERROR_MUSIC_NOT_FOUND': 'Desculpe, não conseguimos reconhecer a música', 
    'ERROR_UNEXPECTED': 'Desculpe, um erro inesperado ocorreu!\nTente novamente mais tarde...', 
    'MENU_INVALID_OPTION': 'Opção inválida, tente escolher novamente',
    'WELCOME': 'Olá! Envie-nos um áudio de 5s com a música que deseja descobrir!',
    'UNKNOW_MESSAGE_TYPE': 'Desculpe, não conseguimos compreender!\nTente enviar uma música!',
    'GOOD_BYE': 'Quando quiser, bastar enviar novamente um áudio pra gente! Até a próxima! 😉'
}
Object.freeze(MESSAGES)

class Message {

    constructor() { }

    static isAudio(messageEvent) {
        return messageEvent.message.contents[0].type === 'file' && messageEvent.message.contents[0].fileMimeType.includes('audio')
    }

    static isText(messageEvent) {
        return messageEvent.message.contents[0].type === 'text'
    }

    static getFileFromUser(messageEvent) {
        return messageEvent.message.contents[0].fileUrl
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

module.exports = { MESSAGES, Message }