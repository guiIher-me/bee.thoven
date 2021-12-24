const Message = require('./message')
const Button = require('./button')
const RecognizeOption = require('./recognize/recognizeOption')

module.exports = class Menu {

    constructor(title, options) {
        this.title = title
        this.options = options
    }

    getMessages() {
        const messageMenu = Button.getMenu(this.title, this.options)
        content.push(Message.toText(messageMenu))
        return content
    }

    async executeOption(text, music) {
        const rec_option = RecognizeOption.recognize(text, this.options)
        const option = rec_option.item //pode melhorar se pegar o refIndex (retorna o index encontrado)

        if(option == this.options[0])
            return await music.getLinksPlayerMusicMessages()

        if(option == this.options[1])
            return false

        if(option == this.options[2])
            return false

        return false
    }

}