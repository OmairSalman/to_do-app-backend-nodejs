import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, BaseEntity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Task } from "./task.entity";

@Entity()
export class TaskCategory extends BaseEntity
{
  @PrimaryGeneratedColumn("uuid")
  id!: string
  
  @Column()
  name!: string

  @Column("text", {nullable: true})
  description!: string

  @OneToMany(() => TaskCategory, (category) => category.tasks)
  tasks!: Task[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}