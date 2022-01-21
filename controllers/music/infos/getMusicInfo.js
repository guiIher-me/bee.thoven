const MESSAGES = require('../../message/messages.enum')

function getMusicInfo(music) {
    let text = ''

    if (music.artist)
        text = `${text}Artista: *${music.artist}*\n`

    if (music.title)
        text = `${text}Título: *${music.title}*\n`
    
    if (music.album)
        text = `${text}Álbum: *${music.album}*\n`

    return text != '' ? MESSAGES.MUSIC_FOUND + text : false
}

module.exports = getMusicInfo;
