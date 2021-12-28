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

    'MUSIC_FOUND': 'Oba! Encontrei essa aqui 👇\n\n'
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