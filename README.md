## JWT LEARNING

Esse projeto foi criado com a intenção de aprender os conceitos sobre o JWT (Método de autenticação)
<br>
Projeto foi feito utilizando um simples servidor no express, com um simples front-end desenvolvido em React
<br>
Foi utilizado o React Router, para controlar o acesso à rotas privadas.
<br>
Abaixo os comandos iniciais
<br>
### Servidor:
<code>
git clone '...'
cd jwt-learning-backend
</code>
<br>
Dentro da pasta "Keys" é necessário colocar uma private e public key geradas a partir do openssl
<br>
<code>
openssl genrsa -out private_key.pem 2048
openssl rsa -in private_key.pem -pubout -out public_key.pem
</code>
<br>
Coloque a saida gerada em um arquivo ".env" com as propriedades "PUBLIC_KEY="SUA_CHAVE_AQUI" PRIVATE_KEY="SUA_CHAVE_AQUI"" 
<br>
<code>
npm i
npm start
</code>
<br>

### Cliente:
<code>
git clone '...'
cd jwt-learning-frontend
npm i
npm run dev
</code>
