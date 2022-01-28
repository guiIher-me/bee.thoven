const axios = require('axios')
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1')
const { IamAuthenticator } = require('ibm-watson/auth')
const dotenv = require('dotenv')
const Logger = require('../../../logger/Logger')

async function speechToText(fileaudio) {
    Logger.info('speechToText', 'tentando reconhecer voz como texto...')

    dotenv.config()
    const apikey = process.env.STT_API_KEY
    const serviceUrl = process.env.STT_URL

    const speechToText = new SpeechToTextV1({
        authenticator: new IamAuthenticator({
            apikey: apikey,
        }),
        serviceUrl: serviceUrl,
    });

    const stream = await axios.get(fileaudio.fileUrl, {
        responseType: 'stream',       
    });

    const recognizeParams = {
        audio: stream.data,
        contentType: fileaudio.fileMimeType,
    };

    try {
        const response = await speechToText.recognize(recognizeParams)
        if(!response || !response.result.results[0])
            throw new Error('Não foi possível reconhecer este áudio como texto')

        return response.result.results[0].alternatives[0].transcript
    } catch(error) {
        Logger.error('speechToText', error)
        throw new error('Erro ao tentar converter audio para texto')
    }
}

module.exports = speechToText
