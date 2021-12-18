var axios = require("axios");
const dotenv = require('dotenv');

module.exports = async (url) => {

  try {
  dotenv.config();

  const form = {
    'api_token': process.env.AUDD_TOKEN,
    'url': url,
    'return': 'deezer'
  }

  const chamada = async (form) => {
    let result = await axios({
      method: 'post',
      url: 'https://api.audd.io/',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
   
   console.log(result.data)
    
    return result.data
  }

  let resposta = await chamada(form)
  

  if (resposta && resposta.result) {
    return {
      artist: resposta.result.artist,
      title: resposta.result.title,
      album: resposta.result.album,
      spotify: {
        picture: resposta.result.deezer && resposta.result.deezer.artist ? resposta.result.deezer.artist.picture : undefined,
        preview: resposta.result.deezer.preview ? resposta.result.deezer.preview : undefined,
        link: resposta.result.deezer ? resposta.result.deezer.link : undefined,
      },

    }
  }

} catch (err) {
  return err
}

}