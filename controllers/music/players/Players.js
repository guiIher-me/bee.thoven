const getMessages = require('./getMessages');

class Players {
    constructor(music) {
        this.music = music
    }

    async getMessages() {
        return await getMessages(this.music)
    }
}

module.exports = Players
