const Message = require('./message')
const RecognizeOption = require('./recognize/recognizeOption')

module.exports = class Menu {

    constructor(title, options) {
        this.title = title
        this.options = options
        this.formatedOptions = this.getArrayFormatedOptions()
    }

    getArrayFormatedOptions() {
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