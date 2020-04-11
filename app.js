const express = require('express');
const app = express();
const port = 3030;
const fs = require('fs');


app.get('/:file', (req, res) => {
    const file = fs.readFileSync(`./dist/${req.params.file}.js`);
    console.log(req.params.file, "requested");
    res.send(file);
});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
