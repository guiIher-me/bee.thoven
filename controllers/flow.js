const Music = require('./music')
const { MESSAGES, Message } = require('./message')
const mainMenu = require('./menu/mainMenu')
const recognizeMusic = require('./recognize/recognizeMusic')

let music
module.exports = class Flow {

    static async tryRecognizeAudio(messageEvent) {
        let content = []

        try {
            const rec_music = await recognizeMusic(Message.getFileFromUser(messageEvent))
            if(!rec_music) throw new Error('Music not found!')

            music = new Music(rec_music)

            //show music items
            let messages = await music.getInfoMessages()
            content.push(...messages)
            console.log("Música encontrada!")

            //show menu
            messages = mainMenu.getMessages()
            content.push(...messages)

        } catch(e) {
            content.push(Message.toText(MESSAGES.ERROR_MUSIC_NOT_FOUND))
        } finally {
            return content
        }
    }

    static async tryRecognizeText(messageEvent) {
        let content = []

        try {
            let text = Message.getTextFromUser(messageEvent)            
            let messages = await mainMenu.executeOptionByText(text, music)
            content.push(...messages)
        } catch(e) {
            content.push(Message.toText(MESSAGES.ERROR_UNEXPECTED))
        } finally {
            return content
        }
    }
}