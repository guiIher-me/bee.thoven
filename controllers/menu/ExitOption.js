/* eslint-disable class-methods-use-this */
const Option = require('./Option')

class ExitOption extends Option {
    constructor(text = '', action = null) {
        super(text, action)
    }

    reshowMenu() {
        return false
    }
}

module.exports = ExitOption
