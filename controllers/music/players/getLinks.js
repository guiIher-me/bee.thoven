const getArrayMusicLinks = require('../../functionArrayLinks')
const musicList = require('../../musicList')

async function getLinks(music) {
    const linksMusic = await musicList(music.spotify.link)
    return getArrayMusicLinks(linksMusic.linksByPlatform)
}

module.exports = getLinks;