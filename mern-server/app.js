import express from "express";

const app = express();

app.listen(3000, () => {
    console.log('Server');
});

app.get('/', (req, res) => {
    res.json('Hello');
});