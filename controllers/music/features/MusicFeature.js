
class MusicFeature {
    constructor(music) {
      if (this.constructor === MusicFeature)
        throw new Error("Abstract classes can't be instantiated.");
      
      this.music = music
    }
  
    async getMessages() {
      throw new Error("Method 'getMessages()' must be implemented.");
    }
}

module.exports = MusicFeature;