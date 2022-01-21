
class MusicFeature {
    constructor(music) {
      this.music = music
    }
  
    async getMessages() {
      throw new Error("Method 'getMessages()' must be implemented.");
    }
}

module.exports = MusicFeature;