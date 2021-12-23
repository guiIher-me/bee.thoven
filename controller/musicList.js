let axios = require("axios");


module.exports = async (url) => {
    try {
        let result = await axios({
            method: 'get',
            url: `https://api.song.link/v1-alpha.1/links?url=${url}`,

        })
        return (result.data)
    } catch (err) {
        return err
    }
}