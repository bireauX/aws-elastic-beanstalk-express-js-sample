const express = require('express');
const app = express();
const port = 8080;
// Ciao!
app.get('/', (req, res) => res.send('AWS training in progress!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
