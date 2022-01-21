const getMessages = require("./getMessages")

class Infos {
    constructor(music) {
        this.music = music
    }

    async getMessages() {
        return await getMessages(this.music);
    }
}

module.exports = Infos
