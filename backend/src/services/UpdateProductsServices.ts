import { getCustomRepository } from "typeorm";
import Products from "../models/Products";
import ProductsRepository from "../repositories/ProductsRepository";

interface Request{
    id: number,
    name: string,
    price: number,
    color: string,
    stock: number
}

class UpdatedPlayerService {
    public async execute({id,color,name,price,stock}: Request){
        const productsRepository = getCustomRepository(ProductsRepository)
        const productsUpdated = await productsRepository.save({
          id:id,
          name:name,
          color:color,
          price:price,
          stock:stock
        })
        return productsUpdated
    }
}

export default UpdatedPlayerService