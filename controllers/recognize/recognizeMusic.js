/* eslint-disable max-len */
const axios = require('axios')
const dotenv = require('dotenv')
const Logger = require('../logger/Logger')

async function recognizeMusic(url) {
    try {
        dotenv.config()

        const form = {
            api_token: process.env.AUDD_TOKEN,
            url,
            return: 'lyrics,deezer',
        }

        const chamada = async (formdata) => {
            const result = await axios({
                method: 'post',
                url: 'https://api.audd.io/',
                data: formdata,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            return result.data
        }

        const resposta = await chamada(form)

        if (resposta && resposta.result)
            return {
                artist: resposta.result.artist,
                title: resposta.result.title,
                album: resposta.result.album,
                lyrics: resposta.result.lyrics ? resposta.result.lyrics.lyrics : undefined,
                spotify: {
                    picture: resposta.result.deezer && resposta.result.deezer.artist ? resposta.result.deezer.artist.picture : undefined,
                    preview: resposta.result.deezer.preview ? resposta.result.deezer.preview : undefined,
                    link: resposta.result.deezer ? resposta.result.deezer.link : undefined,
                },
            }
    } catch (error) {
        Logger.error(error)
        return error
    }

    return false
}

module.exports = recognizeMusic
