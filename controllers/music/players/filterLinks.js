
function filterLinks(links) {
    if(!links) return false

    let text = ''
    links.forEach(musicLink => {
        text += `*${musicLink.name}*:\n${musicLink.url}\n\n`
    });
    
    return text != '' ? text : false
}

module.exports = filterLinks
