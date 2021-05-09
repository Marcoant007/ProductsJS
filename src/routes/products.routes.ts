import Router, { request, response } from 'express';
import CreatedProductsService from '../services/CreateProductsService';
import DeletedProductsService from '../services/DeletedProductsService';
import ListedProductsService from '../services/ListedProductsService';
import UpdatedPlayerService from '../services/UpdateProductsServices';

const products = Router();

products.get('/', async(request,response) => {
    const listProducts = new ListedProductsService();
    const products = await listProducts.execute()
    return response.status(200).json(products)
})

products.post('/', async(request, response) => {
    try {
        const {name,price,color, stock } = request.body
        const createdProducts = new CreatedProductsService()
        const products = await createdProducts.execute({
            name,
            price,
            stock,
            color
        })
        return response.status(200).json(products)
        
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
})

products.put('/:id', async(request,response) =>{
    const { id } = request.params
    const {name,price,color,stock} = request.body
    const updatedProducts = new UpdatedPlayerService()
    const products = await updatedProducts.execute({
        id: Number(id),
        name,
        price,
        stock,
        color
    })
    return response.status(200).json(products)
})

products.delete('/:id', async(request,response) => {
    const {id} = request.params
    const deletedProducts = new DeletedProductsService()
    await deletedProducts.execute({id:+id})
    return response.status(204).send({})
})

export default products