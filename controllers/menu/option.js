const Logger = require('../logger/Logger')

module.exports = class Option {
    
    constructor(text = '', show_menu, action = null) {
        this.text = text
        this.action = action
        this.show_menu = show_menu
    }

    reshowMenu() {
        return this.show_menu
    }

    async execute(params) {
        try {
            return await this.action(params)
        } catch(error) {
            logerror = new Error(`Error executing option "${this.text}"`)
            Logger.error('Option', logerror)
            throw logerror
        }
    }
}