const axios = require('axios')

async function getLinks(url) {
    const result = await axios({
        method: 'get',
        url: `https://api.song.link/v1-alpha.1/links?url=${url}`,
    })

    return result.data
}

module.exports = getLinks
