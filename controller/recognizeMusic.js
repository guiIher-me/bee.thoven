var axios = require("axios");
const dotenv = require('dotenv');

module.exports = async (url) => {

  dotenv.config();

  const form = {
    'api_token': process.env.AUDD_TOKEN,
    'url': url,
    'return': 'apple_music,spotify'
  }

  const chamada = async (form) => {
    let result = await axios({
      method: 'post',
      url: 'https://api.audd.io/',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then((response) => {
      console.log("aqui:", response.data)
      return response.data
    }).catch((error) => {
      console.log(error)
      return error
    });
    return result
  }

  let resposta = await chamada(form)
  console.log("resposta:   ", resposta.result.spotify.artists)
  

  if (resposta && resposta.result) {
    return {
      artist: resposta.result.artist,
      title: resposta.result.title,
      album: resposta.result.album,
      spotify: {
        picture: resposta.result.spotify && resposta.result.spotify.images ? resposta.result.spotify.images[0] : undefined,
        preview: resposta.result.spotify ? resposta.result.spotify.preview_url : undefined,
        link: resposta.result.spotify ? resposta.result.song_link : undefined,
      },

    }
  }

}