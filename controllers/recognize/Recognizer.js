const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
const Logger = require('../logger/Logger')
const mainMenu = require('../menu/mainMenu')
const tryRecognizeAudioAsMusic = require('./tryRecognizeAudioAsMusic')
const tryRecognizeAudioAsVoice = require('./tryRecognizeAudioAsVoice')

const system = {}
class Recognizer {
    static async tryRecognizeAudio(inputMessage) {
        const content = []

        try {
            const musicContent = await tryRecognizeAudioAsMusic(inputMessage, system)
            if (musicContent) {
                content.push(...musicContent)
                return content
            }

            const voiceContent = await tryRecognizeAudioAsVoice(inputMessage)
            if (voiceContent) {
                system.music = null
                content.push(...voiceContent)
                return content
            }
        } catch (error) {
            Logger.error('Recognizer.tryRecognizeAudio', error)
        }

        content.push(MessageHelper.toText(MESSAGES.ERROR_MUSIC_NOT_FOUND))
        return content
    }

    static async tryRecognizeText(inputMessage) {
        const content = []

        try {
            const text = MessageHelper.getTextFromUser(inputMessage)
            const messages = await mainMenu.executeOptionByText(text, system)
            content.push(...messages)
            return content
        } catch (error) {
            Logger.error('Recognizer.tryRecognizeText', error)
            content.push(MessageHelper.toText(MESSAGES.ERROR_UNEXPECTED))
            return content
        }
    }
}

module.exports = Recognizer
