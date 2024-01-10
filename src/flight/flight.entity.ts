import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

/* 
We are using the decorator @Entity() to tell TypeORM that this is an entity

We are using the decorator @PrimaryGeneratedColumn() to tell TypeORM that this is the primary key of the table

We are using the decorator @Column() to tell TypeORM that this is a column of the table */
@Entity()
export class Flight {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    hours: number;

    @Column()
    lastService: string;

}


