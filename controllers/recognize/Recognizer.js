const Music = require('../music/Music')
const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
const mainMenu = require('../menu/mainMenu')
const recognizeMusic = require('./recognizeMusic')

let system = {}
class Recognizer {

    static async tryRecognizeAudio(inputMessage) {
        let content = []

        try {
            const rec_music = await recognizeMusic(MessageHelper.getFileFromUser(inputMessage))
            if(!rec_music) throw new Error('Music not found!')

            system.music = new Music(rec_music)

            //show music items
            let messages = await system.music.getInfos()
            content.push(...messages)

            //show menu
            messages = await mainMenu.getMessages()
            content.push(...messages)

        } catch(error) {
            console.log(error)
            content.push(MessageHelper.toText(MESSAGES.ERROR_MUSIC_NOT_FOUND))
        } finally {
            return content
        }
    }

    static async tryRecognizeText(inputMessage) {
        let content = []

        try {
            let text = MessageHelper.getTextFromUser(inputMessage)
            let messages = await mainMenu.executeOptionByText(text, system)
            content.push(...messages)
        } catch(error) {
            content.push(MessageHelper.toText(MESSAGES.ERROR_UNEXPECTED))
        } finally {
            return content
        }
    }
}

module.exports = Recognizer
