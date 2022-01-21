const getMessages = require('./getMessages');

class Translate {
    constructor(music) {
        this.music = music
    }

    async getMessages() {
        return await getMessages(this.music)
    }
}

module.exports = Translate
