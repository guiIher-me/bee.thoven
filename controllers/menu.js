const { contentType } = require('express/lib/response')
const Message = require('./message')

module.exports = class Menu {

    static getMessages() {
        let content = []
        const messageMenu = "*O que você deseja obter?*\n" +
                            "1. Players de música\n" +
                            "2. Letra\n" +
                            "3. Tradução\n" +
                            "4. cifra"
        
        content.push(Message.toText(messageMenu))
        return content
    }

    //TODO - usaremos a lib fuzzy para reconhecer o texto/opção
    static recognizeOption(text) {
        return text
    }

    static async executeOption(text, music) {
        
        let content = []

        switch(Menu.recognizeOption(text)) {
            case '1':
                let messages = await music.getLinksPlayerMusicMessages()
                content.push(...messages)
                break
            case '2':
    
                break
            case '3':
    
                break
            case '4':
    
                break
            default:
        }

        return content
    }


}