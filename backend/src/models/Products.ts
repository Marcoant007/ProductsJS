import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('products')
class Products {

    @PrimaryColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    color: string;

    @Column()
    stock: number

}

export default Products
