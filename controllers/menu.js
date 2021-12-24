const Message = require('./message')
const RecognizeOption = require('./recognize/recognizeOption')

module.exports = class Menu {

    constructor(title, options) {
        this.title = title
        this.options = options
        this.formatedOptions = this.getFormatedOptionsArray()
    }

    getFormatedOptionsArray() {
        return this.options.map((option, index) => {
            return `${index+1}. ${option}`
        })
    }

    toString() {
        let menu = `*${this.title}*\n\n`
        this.formatedOptions.forEach(element => menu += `${element}\n`);
        return menu
    }

    getMessages() {
        let messages = this.toString()
        return [Message.toText(messages)]
    }

    async executeOptionByText(text, music) {
        if(!music) return [Message.toText('Olá! Envie-nos um áudio de 5s com a música que deseja descobrir!')]

        const rec_option = RecognizeOption.recognize(text, this.formatedOptions)
        if(!rec_option.length) return [Message.toText("Opção inválida, tente escolher novamente")]

        const option = rec_option[0].refIndex

        if(option == 0)
            return await music.getLinksPlayerMusicMessages()

        if(option == 1)
            return [Message.toText("[dev] a fazer")]

        if(option == 2)
            return [Message.toText("[dev] a fazer")]
    }

}