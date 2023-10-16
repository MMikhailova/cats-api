import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import express from 'express';
import dotenv from 'dotenv';
import catRouters from './routes/cat.js';
dotenv.config();
//initialize express
const app = express();
const PORT = process.env.PORT || 3005;
const __fileName = fileURLToPath(import.meta.url);
const PATH = path.dirname(__fileName);

//set template egine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

//parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public folder
app.use(express.static(path.join(PATH, 'public')));
app.use(logger);

//routers
app.use('/api/cats', catRouters);

app.use('*', (req, res) => {
    res.status(404).render('404', { message: `Page is not found` });
});

app.listen(PORT, () => {
    console.log(`Server is up and running in ${PORT}`);
});
