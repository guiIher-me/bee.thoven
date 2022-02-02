function getSpecificLinks(params) {
    const players = [
        { name: 'Deezer', prop: 'deezer' },
        { name: 'Apple Music', prop: 'appleMusic' },
        { name: 'Spotify', prop: 'spotify' },
    ]

    const arrayLinks = []
    players.forEach((player) => {
        if (params[player.prop])
            arrayLinks.push({
                name: player.name,
                url: params[player.prop].url,
            })
    })

    return arrayLinks
}

module.exports = getSpecificLinks
