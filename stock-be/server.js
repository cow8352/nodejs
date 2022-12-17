const express = require('express');
// 利用 express 做出一個 web app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express5')
});

app.listen(3001, () => {
    console.log('Server running at port 3001');
});