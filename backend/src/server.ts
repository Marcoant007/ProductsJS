import express, { request, response } from 'express';
import routes from './routes';
import './database'

const app = express();
const port = 3333;
app.use(express.json())
app.use(routes)

app.listen(port, ()=> {
    console.log("Servidor iniciado na porta:", port)
})