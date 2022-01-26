
class MusicFeature {
    constructor(music = null) {
      this.music = music
    }
  
    async getMessages() {
      throw new Error("Method 'getMessages()' must be implemented.");
    }
}

module.exports = MusicFeature;