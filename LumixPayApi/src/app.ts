import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import * as dotenvnv from 'dotenv';

import routes from './routes/index.router';

const app: Express = express();

dotenvnv.config();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH POST PUT');
        return res.status(200).json({});
    }
    next();
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static('public'));

app.use('/', routes);

app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
})

if (!process.env.PORT) {
    console.log("Port number not specified...");
}

const PORT: Number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`);
});