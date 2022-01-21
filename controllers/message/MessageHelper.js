const {
    FileContent,
    TextContent,
} = require('@zenvia/sdk');

const MESSAGES = {
    'ERROR_MUSIC_NOT_FOUND': 'Hmm... Não conseguimos reconhecer a música 😓\nVamos tentar de novo, envie um *áudio de 5 segundos* com a música que deseja descobrir!',
    'ERROR_UNEXPECTED': 'Poxa, um erro inesperado aconteceu 😯\nVocê pode tentar novamente mais tarde.',
    'MENU_INVALID_OPTION': 'Ops! A opção escolhida não é válida, digite o número ou escreva uma das opções acima 👆',
    'WELCOME': 'Olá, que bom ter você aqui!\nPara começar, envie um áudio de 5 segundos com a música que deseja descobrir!',
    'UNKNOW_MESSAGE_TYPE': 'Hmm... Não conseguimos entender esse formato de mensagem.\nEnvie apenas o áudio da música!',
    'GOOD_BYE': 'Quando quiser, é só enviar novamente um áudio pra gente!\nAté a próxima 👋',
    'ERROR_PLAYERS_NOT_FOUND': 'Ops! Não foi possível encontrar players disponíveis para essa música',
    'ERROR_LYRICS_NOT_FOUND': 'Ops! Não foi possível encontrar a letra para essa música',
    'ERROR_TRADUTION_NOT_FOUND': 'Ops! Não foi possível encontrar a tradução para essa música',
    'MUSIC_FOUND': 'Oba! Encontrei essa aqui 👇\n\n'
}
Object.freeze(MESSAGES)

class MessageHelper {

    constructor() { }

    static getContent(messageEvent) {
        console.log(messageEvent)
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

module.exports = { MESSAGES, MessageHelper }