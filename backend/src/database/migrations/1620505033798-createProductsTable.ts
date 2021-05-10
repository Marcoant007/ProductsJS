import { MigrationInterface, QueryRunner } from "typeorm";

export class createProductsTable1620505033798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE products (
            id serial,
            name varchar(255) not null,
            price float not null,
            color varchar(255),
            stock int not null
        )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE products
        `)
    }

}
