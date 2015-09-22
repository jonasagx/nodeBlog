# My Blob

Essa aplicação depende que jasmine esteja na máquina, para uso global. Isso pode ser garantido fazendo:

`$ npm install -g jasmine`

Por conta da qualidade da minha conexão a bibliotecas usadas não estão incluídas, para fazê-lo:

`$ npm install`

Para levantar o servidor faça:

`$ npm start`

Para executar os testes faça:

`$ npm test`

Os testes foram feitos sobre a api usando jasmine, e uma biblioteca que cria mocks para testes de requisição/resposta chamada dupertest. As descrições dos testes estão nas strings dentro dos describes.

Os testes foram feitos baseados na estrutura da aplicação, após o desenvolvimento da segunda.

O blog usa um banco de dados em memória, persente no arquivo routes/api.js
