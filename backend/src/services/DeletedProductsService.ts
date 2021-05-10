import { getCustomRepository } from "typeorm";
import Products from "../models/Products";
import ProductsRepository from "../repositories/ProductsRepository";

interface Request{
    id: number
}

class DeletedProductsService {
    public async execute({id}:Request){
        const productsDeleted = getCustomRepository(ProductsRepository)
        await productsDeleted.delete(
            {
                id: id
            }
        )
    }
}

export default DeletedProductsService