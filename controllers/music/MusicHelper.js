class MusicHelper {
    static hasImage(music) {
        return music.spotify && music.spotify.picture
    }

    static hasAudioPreview(music) {
        return music.spotify && music.spotify.preview
    }
}

module.exports = MusicHelper
