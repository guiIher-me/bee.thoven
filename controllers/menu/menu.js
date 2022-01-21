const { MESSAGES, MessageHelper } = require('../MessageHelper')
const RecognizeOption = require('../recognize/recognizeOption')

class Menu {
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
            return `*${index+1}.* ${option.text}`
        })
    }

    toString() {
        let menu = `${this.title}\n\n`
        this.getFormatedOptionsArray().forEach(element => menu += `${element}\n`)
        return menu
    }

    async getMessages() {
        let messages = this.toString()
        return [MessageHelper.toText(messages)]
    }

    async executeOptionByText(text, system) {
        if(!system.music) return [MessageHelper.toText(MESSAGES.WELCOME)]

        const rec_option = RecognizeOption.recognize(text, this.getFormatedOptionsArray())
        if(!rec_option.length) return [MessageHelper.toText(MESSAGES.MENU_INVALID_OPTION)]

        const index = rec_option[0].refIndex
        const option = this.options[index]

        let content = []
        let messages = await option.execute(system)
        content.push(...messages)

        if(option.reshowMenu()) {
            messages = await this.getMessages()
            content.push(...messages)
        }

        return content
    }

}

module.exports = Menu;
