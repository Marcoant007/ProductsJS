import { getCustomRepository } from "typeorm";
import ProductsRepository from "../repositories/ProductsRepository";
import Products from "../models/Products";

interface Request {
    name: string;
    price: number;
    color?: string;
    stock: number

}

class CreatedProductsService {
    public async execute({color,name,price,stock }:Request):Promise<Products>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const productsCreate = productsRepository.create({
            name,
            color,
            price,
            stock
        })
        await productsRepository.save(productsCreate)
        return productsCreate
    }
}

export default CreatedProductsService;