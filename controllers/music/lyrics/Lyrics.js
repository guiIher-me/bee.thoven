
const getMessages = require('./getMessages');

class Lyrics {
    constructor(music) {
        this.music = music
    }

    async getMessages() {
        return await getMessages(this.music)
    }
}

module.exports = Lyrics
