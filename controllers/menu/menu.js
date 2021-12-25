const Message = require('../message')
const RecognizeOption = require('../recognize/recognizeOption')

module.exports = class Menu {

    constructor(title = '', options = []) {
        this.title = title
        this.options = options
    }

    setTitle(title) {
        this.title = title
    }

    addOption(option) {
        this.options.push(option)
    }

    getFormatedOptionsArray() {
        return this.options.map((option, index) => {
            return `${index+1}. ${option.text}`
        })
    }

    toString() {
        let menu = `*${this.title}*\n\n`
        this.getFormatedOptionsArray().forEach(element => menu += `${element}\n`);
        return menu
    }

    getMessages() {
        let messages = this.toString()
        return [Message.toText(messages)]
    }

    async executeOptionByText(text, music) {
        if(!music) return [Message.toText('Olá! Envie-nos um áudio de 5s com a música que deseja descobrir!')]

        const rec_option = RecognizeOption.recognize(text, this.getFormatedOptionsArray())
        if(!rec_option.length) return [Message.toText("Opção inválida, tente escolher novamente")]

        const index = rec_option[0].refIndex
        return await this.options[index].execute(music)
    }

}