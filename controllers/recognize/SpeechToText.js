const fs = require('fs')
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1')
const { IamAuthenticator } = require('ibm-watson/auth')
const dotenv = require('dotenv')

async function speechToText(speech = '') {
    dotenv.config()
    const apikey = env.proccess.STT_API_KEY
    const serviceUrl = env.proccess.STT_URL

    const speechToText = new SpeechToTextV1({
        authenticator: new IamAuthenticator({
            apikey: apikey,
        }),
        serviceUrl: serviceUrl,
    });

    const recognizeParams = {
        audio: fs.createReadStream('./song.oga'),
        contentType: 'audio/ogg',
    };

    speechToText.recognize(recognizeParams)
    .then(speechRecognitionResults => {
        console.log(JSON.stringify(speechRecognitionResults, null, 2))
    })
    .catch(err => {
        console.log('error:', err)
    });
}

moodule.exports = speechToText