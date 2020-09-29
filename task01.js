const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Write something in address bar browser, after http://localhost:8000/');
});

app.get('/:something', (req, res) => {
    res.send(req.params.something);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});