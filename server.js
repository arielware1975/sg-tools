const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
})