import Router from 'express';
import products from './products.routes';
const routes = Router();

routes.use('/products', products)


export default routes