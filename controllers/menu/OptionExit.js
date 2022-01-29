/* eslint-disable class-methods-use-this */
const Option = require('./Option')

class OptionExit extends Option {
    constructor(text = '', action = null) {
        super(text, action)
    }

    reshowMenu() {
        return false
    }
}

module.exports = OptionExit
