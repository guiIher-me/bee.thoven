const getMusicInfo = require('./getMusicInfo')
const MessageHelper = require('../../../message/MessageHelper')
const MusicHelper = require('../../MusicHelper');

function getMessages(music) {
    const musicInfoText = getMusicInfo(music)
    let content = []

    if(musicInfoText)
      content.push(MessageHelper.toText(musicInfoText))

    // if(MusicHelper.hasImage(music))
    //   content.push(MessageHelper.toFile(music.spotify.picture, 'image/jpeg'))
    
    // if(MusicHelper.hasAudioPreview(music))
    //   content.push(MessageHelper.toFile(music.spotify.preview, 'audio/mpeg'))

    return content
}

module.exports = getMessages;