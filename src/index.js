const express = require('express');

const key = require('./config/main.config');
const ConnectDB = require('./config/db.config');
const cors = require('cors');

const { port, mongoURL } = key;

// connect DB
ConnectDB(mongoURL);

// Middlewares
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));

//Routes
app.get('/', function(req, res) {
    res.json({ data: 'Hello Coders Tokyo' });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));