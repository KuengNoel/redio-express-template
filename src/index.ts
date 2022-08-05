import express from 'express';

import exists from './routes/exists.js';
import store from './routes/store.js';
import load from './routes/load.js';
import del from './routes/delete.js';
import update from './routes/update.js';

const app = express();
const port = 3000;

app.use('/exists', exists);
app.use('/store', store);
app.use('/load', load);
app.use('/delete', del);
app.use('/update', update);


app.use((req, res) => {
    res
    .status(404)
    .json({
        code: 404,
        message: `Method not found.`
    });

    console.log(`[ Warning ] Got unresolvable request "${req.url}`);
})

app.listen(port, () => {
    console.log(`[ Info ] Server started at http://localhost:${port}/`);
})
