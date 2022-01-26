const Logger = require('../logger/Logger')
const MusicFeatureFactory = require('../music/features/MusicFeatureFactory')

async function tryRecognizeAudioAsVoice(inputMessage) {
    Logger.info('tryRecognizeAudioAsVoice', 'tentando reconhecer como voz...');

    const searches = MusicFeatureFactory.createFeature('searches', inputMessage)
    let messages = await searches.getMessages()

    return messages.length ? messages : false
}

module.exports = tryRecognizeAudioAsVoice
