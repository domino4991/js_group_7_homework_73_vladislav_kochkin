const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const PORT = 8001;

const password = 'password';

app.get('/', (req, res) => {
    res.send('Write something in http://localhost:8001/encode/something to encode and /decode/encodedsomething to decode');
});

app.get('/encode/:encode', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.encode));
});

app.get('/decode/:decode', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.decode));
});

app.listen(PORT, () => {
   console.log('Server running at http://localhost:'+PORT);
});