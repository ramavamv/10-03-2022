/**
 * EXPRESS
 * pRECISA INSTALAR A BIBLIOTECA BODY-PARSER
 * 
 * npm i express
 * npm i body-parser
 * npm i -D nodemon
 * npm set-script dev "nodemon index.js"
 * npm run dev
 * 
 * https://github.com/menezee/818-linx/blob/main/classes/all-the-nice-things.mdx#e-para-ler-o-body-no-post
 * 
 * https://expressjs.com/pt-br/starter/hello-world.html
 * 
 * https://github.com/menezee/818-linx/commit/eccab5d5f1755eb80349c1f3b48d6d879924943c
 */
//mesma coisa que fazer -- const app = require('express')();
 const express = require('express');
 const app = express();

 const bodyParser = require('body-parser');


 const beerRouter = require('./beer');
 
 app.use(bodyParser.json());




 
 app.get('/', (req, res) => {
  res.send('Hello World!');
});

 //{"message":"foo"}
 //lembrar de mudar no postamn para JSON
 app.post('/', (req, res) => {
   const body = req.body;
 
   res.json({//ou res.send
     //message: body.message,
     received_at: new Date().toISOString(),
     "message-from-body": body.message,
     //message: body.message,
   });

   req.on('data', chunk => {
    buffers.push(chunk);
  });
 });

 app.post('/beer', (req, res) => {
  const body = req.body;
  res.send(body.message)
  }
 );



app.use((req, res, next) => {
  req.melhorEscola = 'lets code';
  next();
});

app.use('/beer', beerRouter);
 
 app.listen(8080);