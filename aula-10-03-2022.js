/**
 * CRYPTO
 * ajuda a criptografar coisas, descriptografar também
 * 
 * ex do git
 * ssh gera uma chave, uma senha
 */

//const crypto = require('crypto');
/*
class MyCrypto {
  constructor(password) {
    //vamos trabalhar com buffers, trabalhar com uma chave
    //criar uma chave com este algoritommo 256
    this._key = crypto.createHash('sha256').update(password).digest();//.digest() significa q acabou quero retornar
  }

  _createCipher(key) {

    //craira vertor de inicialização
    const initializationVector = Buffer.allocUnsafe(16);
    return crypto.createCipheriv('aes256', key, initializationVector);
  }

  encrypt(msg) {
    //aqui criamos o cipher
    const cipher = this._createCipher(this._key);

    let encrypted = '';
    encrypted += cipher.updatemsg(masg, 'binary', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }

  _createDecipher(key) {

  }
}*/
//bibliotecxca nativa do node
//npm i aes256


const crypto = require('crypto');
const aes256 = require('aes256');

class MyCrypto {
  constructor(password) {
    this._key = crypto.createHash('sha256').update(password).digest();
  }

  _createCipher(key) {
    const initializationVector = Buffer.allocUnsafe(16);
    return crypto.createCipheriv('aes256', key, initializationVector);
  }

  encrypt(msg) {
    const cipher = this._createCipher(this._key);

    let encrypted = '';
    encrypted += cipher.update(msg, 'binary', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }

  _createDecipher(key) {
    const initializationVector = Buffer.allocUnsafe(16);
    return crypto.createDecipheriv('aes256', key, initializationVector);
  }

  decrypt(hash) {
    const decipher = this._createDecipher(this._key);

    let decrypted = '';
    decrypted += decipher.update(hash, 'hex', 'binary')
    decrypted += decipher.final('binary');

    return decrypted;
  }
}
//const myCrypto = new Crypto('letscode2022');

const senha = 'letscode2022';

const mensagemDescriptografada = (
  aes256.decrypt(
    senha,
    'SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==',
  )
);

//SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==
//Bora Node.js
//key="letscode2022"

console.log(mensagemDescriptografada);

const mensagem = 'Bora Node.js';
const mensagemCriptografada = aes256.encrypt(senha, mensagem);

console.log(mensagemCriptografada);

const mensagemDescriptografada2 = (
  aes256.decrypt(
    senha,
    'c/wYZ/trgj+oyNKThqODPKpDnH9BLpxZdKzPkQ==',
  )
);

console.log(mensagemDescriptografada2);

//https://github.com/menezee/818-linx/blob/main/classes/all-the-nice-things.mdx



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
 * 
 * https://github.com/menezee/818-linx/commit/eccab5d5f1755eb80349c1f3b48d6d879924943c
 * 
 * 
 * testes
 * https://www.npmjs.com/package/supertest
 * 
 * npx express-generator
 * vai criar um projeto que tem várias coisas dentro
 * precisa fazer 
 * npm install --das dependencias
 * 
 * npm start
 * 
 * AXIOS
 * 
 * https://api.openbrewerydb.org/breweries
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * curso
 * Curso de Node.js completo com Typescript, Jest, TDD, Github... [Código atualizado 2022]

https://www.youtube.com/watch?v=W2ld5xRS3cY&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh




https://sites.google.com/letscode.com.br/guialetscode/nossos-combinados/secretaria-acad%C3%AAmica


https://sites.google.com/letscode.com.br/guialetscode/ensino
*/