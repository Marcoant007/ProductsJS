import { getCustomRepository } from "typeorm"
import ProductsRepository from "../repositories/ProductsRepository"

class ListedProductsService {
    public async execute(){
        const productsRepository = getCustomRepository(ProductsRepository)
        const products = await productsRepository.find()
        return products
    }
}

export default ListedProductsService