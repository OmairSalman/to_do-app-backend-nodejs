import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, BaseEntity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "./user.entity";
import { TaskCategory } from "./task-category.entity";

@Entity()
export class Task extends BaseEntity
{
  @PrimaryGeneratedColumn("uuid")
  id!: string
  
  @Column()
  title!: string

  @Column("text")
  description!: string

  @Column()
  due_date!: Date

  @Column()
  owner_id!: string

  @ManyToOne(() => User, (user) => user.tasks, { eager: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "owner_id" })
  owner!: User

  @Column()
  category_id!: string

  @ManyToOne(() => TaskCategory, (category) => category.tasks, { eager: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "category_id" })
  category!: TaskCategory

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}