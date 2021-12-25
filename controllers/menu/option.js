
module.exports = class Option {
    
    constructor(text = '', functionName = null) {
        this.text = text
        this.functionName = functionName
    }

    setText(text) {
        this.text = text
    }

    getText() {
        return this.text
    }

    setAction(functionName) {
        this.functionName = functionName
    }

    async execute(obj) {
        try {
            return await obj[this.functionName]()
        } catch(e) {
            console.log(`Error executing option "${this.text}"`)
            throw new Error(`Error executing option "${this.text}"`)
        }
    }

}