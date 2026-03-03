const express = require('express');

const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.status(200).send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
