import { DataSource } from "typeorm";
import 'dotenv/config';
import { User } from "../entities/user.entity";

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User],
    synchronize: false,
    logging: false,
    migrations: ["src/database/migrations/**/*.ts"],
});

export default AppDataSource;