const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api', (req, res) => {
    setTimeout(() => {
    res.json({ message: 'Hello World!' });
    }, 5000);
}
);

app.listen(8000, () => {
    console.log('Listening on port 8000');
}
);
