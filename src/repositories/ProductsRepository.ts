import { Entity, EntityRepository, Repository } from "typeorm";
import Products from "../models/Products";

@EntityRepository(Products)
class ProductsRepository extends Repository<Products> {
    public async findByNameOfProducts(name:string): Promise<Products | undefined>{
        const findProducts = await this.findOne({
            where: {name:name}
        })
        return findProducts
    }

}
export default ProductsRepository