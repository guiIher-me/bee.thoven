<h1 align="center">
    <img alt="Bee.thoven" title="Bee.thoven" src="./assets/banner.png" />
</h1>

<h4 align="center"> 
	🐝 Bee.Thoven 🎶
</h4>


## 💻 Sobre o projeto

Projeto criado a partir de um desafio proposto pela chapter leader Stiphanie Silva, com o objetivo de executar o chatbot de música da plataforma Zenvia disponível neste <a href="https://www.zenvia.com/blog/developers/whatsapp-bot-nodejs/">tutorial</a> e aplicar novas features. 

## 🛠 Tecnologias

As seguintes ferramentas foram usadas:

- Node.js
- JavaScript
- Ngrok
- Zenvia

## 🆕 Features

As features desenvolvidas foram:

- Players de Música
- Letra
- Tradução
- Menu de opções
- Find music by lyrics

## API's utilizadas

- AudD
- Vagalume
- Song Link
- IBM speech-to-text 
- Google Custom Search JSON API

## 🚀 Como executar o projeto

1. Clone este repositório e instale as dependências com o comando npm install
2. Crie uma conta na plataforma <a href="https://ngrok.com/">Ngrok</a> 
3. Faça o download da ferramenta Ngrok - <a href="https://ngrok.com/download">download</a>- e execute
4. Configure o token de autenticação gerado na plataforma Ngrok com esse comando: ngrok authtoken "token"
5. Rode o comando ngrok http 3000 para criar o túnel na porta 3000
6. A ferramenta Ngrok está configurada, agora copie a URL pública gerada neste modelo: https://da3e845a1ceb.ngrok.io - Este túnel tem o prazo de 2h após esse tempo é preciso executar o ngrok novamente
7. Crie uma conta na plataforma <a href="https://app.zenvia.com">Zenvia</a> e siga o <a href="https://www.zenvia.com/blog/developers/whatsapp-bot-nodejs/">tutorial</a> a partir do passo 4.
8. Crie uma conta na plataforma <a href="https://audd.io/">AudD</a> e clique em Get an API Token
9. Faça o cadastro para obter o token da api Vagalume - <a href="https://api.vagalume.com.br/">link</a>
10. Obtenha o token da speech-to-text nesse <a href="https://cloud.ibm.com/catalog/services/speech-to-text">link</a>
11. Obtenha o token da api Custom Search JSON API neste <a href="https://developers.google.com/custom-search/v1/overview">link</a> 
12. Crie na raiz deste projeto o arquivo .env com os seguintes dados:
  
  ZENVIA_TOKEN = "token" <br>
  AUDD_TOKEN = "token" <br>
  VAGALUME_TOKEN = "token" <br><br>

  //Speech to Text <br>
  STT_API_KEY = "token" <br>
  STT_URL = "url" <br><br>

  //Google Custom Search <br>
  GCSKey = "token" <br>
  GCSEngine = "token" <br>

13. Por ultimo, no terminal deste repositório digite o comando "node ." 
Deverá receber a mensagem "Webhook is listening"

Pronto! O projeto está rodando ;)