const express = require('express');

var mock_data = require('./questionaire/MockData.json');

const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors({
    origin: [
        'http://127.0.0.1:5173/',
        'http://localhost:3001'
    ],
    credentials: true,
}));


app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/questions', (req, res) => {
  res.send(mock_data);
});
