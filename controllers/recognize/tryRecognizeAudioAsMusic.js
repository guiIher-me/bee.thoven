const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
const mainMenu = require('../menu/mainMenu')
const MusicFeatureFactory = require('../music/features/MusicFeatureFactory')
const recognizeMusic = require('./recognizeMusic')
const Logger = require('../logger/Logger')

async function tryRecognizeAudioAsMusic(inputMessage, system) {
    Logger.info('tryRecognizeAudioAsMusic', 'tentando reconhecer como música...');
    let content = []

    try {
        const rec_music = await recognizeMusic(MessageHelper.getFileFromUser(inputMessage))
        if(!rec_music) return false

        system.music = rec_music;

        //show music items
        const infos = MusicFeatureFactory.createFeature('infos', rec_music)
        let messages = await infos.getMessages(rec_music)
        content.push(...messages)

        //show menu
        messages = await mainMenu.getMessages()
        content.push(...messages)
        return content
    } catch(error) {
        Logger.error('tryRecognizeAudioAsMusic', error)
        content.push(MessageHelper.toText(MESSAGES.ERROR_MUSIC_NOT_FOUND))
        return content
    }
}

module.exports = tryRecognizeAudioAsMusic
