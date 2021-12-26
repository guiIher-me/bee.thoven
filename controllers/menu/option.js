
module.exports = class Option {
    
    constructor(text = '', action = null) {
        this.text = text
        this.action = action
    }

    setText(text) {
        this.text = text
    }

    getText() {
        return this.text
    }

    setAction(action) {
        this.action = action
    }

    async execute(params) {
        try {
            return await this.action(params)
        } catch(e) {
            console.log(`Error executing option "${this.text}"`)
            throw new Error(`Error executing option "${this.text}"`)
        }
    }

}