const Logger = require('../logger/Logger')

class Option {
    
    constructor(text = '', action = null) {
        this.text = text
        this.action = action
    }

    reshowMenu() {
        return true
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

module.exports = Option
