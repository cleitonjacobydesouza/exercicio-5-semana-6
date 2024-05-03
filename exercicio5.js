fetch('https://api.thecatapi.com/v1/images/search?limit=10')

.then(resposta => resposta.json())

.then(data => {
    data.forEach(imagem => {
        document.write(`<img src= '${imagem.url}' width='200' /> <br />'`);        
    });
})