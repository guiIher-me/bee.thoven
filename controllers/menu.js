const Message = require('./message')

module.exports = class Menu {

    static getMessages() {
        let content = []
        const messageMenu = Message.toButtonsMenu('O que você deseja obter?', 
                                                  ['Players de música', 'Letra', 'Tradução'])
        content.push(Message.toText(messageMenu))
        return content
    }

    //TODO - usaremos a lib fuzzy para reconhecer o texto/opção
    static recognizeOption(text) {
        return text
    }

    static async executeOption(text, music) {
        switch(Menu.recognizeOption(text)) {
            case '1':
                return await music.getLinksPlayerMusicMessages()
            case '2':
                return false
            case '3':
                return false
        }

        return false
    }

}