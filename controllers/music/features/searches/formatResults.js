
function formatResults(text, results) {
    if(!results)
        return `Desculpe, não encontramos nada sobre o trecho "${text}"`
    
    const formatted = results.reduce((acc, result) => {
        return acc + `*Título*: ${result.title}\n*Trecho*: ${result.snippet}\n\n`
    }, '')
    
    return `Esses foram os resultados encontrados para o trecho *"${text}"*:\n\n${formatted}`
}

module.exports = formatResults
