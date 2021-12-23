module.exports = (params) => {
    let arrayLinks = []

    if (params.deezer) {
        arrayLinks.push({
            name: "Deezer",
            url: params.deezer.url
        })
    }

    if (params.appleMusic) {
        arrayLinks.push({
            name: "Apple Music",
            url: params.appleMusic.url
        })
    }
    if (params.spotify) {
        arrayLinks.push({
            name: "Spotify",
            url: params.spotify.url
        })
    }

    return arrayLinks
}