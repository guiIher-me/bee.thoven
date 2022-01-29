const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
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
        return this.options.map((option, index) => `*${index + 1}.* ${option.text}`)
    }

    toString() {
        // this.getFormatedOptionsArray().forEach((element) => (menu += `${element}\n`))
        const menu = this.getFormatedOptionsArray().join('\n')
        return `${this.title}\n\n${menu}`
    }

    async getMessages() {
        const messages = this.toString()
        return [MessageHelper.toText(messages)]
    }

    async executeOptionByText(text, system) {
        if (!system.music)
            return [MessageHelper.toText(MESSAGES.WELCOME)]

        const recOption = RecognizeOption.recognize(text, this.getFormatedOptionsArray())
        if (!recOption.length)
            return [MessageHelper.toText(MESSAGES.MENU_INVALID_OPTION)]

        const index = recOption[0].refIndex
        const option = this.options[index]

        const content = []
        let messages = await option.execute(system)
        content.push(...messages)

        if (option.reshowMenu()) {
            messages = await this.getMessages()
            content.push(...messages)
        }

        return content
    }
}

module.exports = Menu
