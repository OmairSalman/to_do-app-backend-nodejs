import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, BaseEntity
} from "typeorm";

@Entity()
export class User extends BaseEntity
{
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    avatarURL!: string

    @Column({ default: false })
    isAdmin!: boolean

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date
}