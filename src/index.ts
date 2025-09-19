import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import AppDataSource from './config/data-source';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

AppDataSource.initialize()
  .then(() => {
      console.log(`Data Source has been initialized! Connected successfully to mysql DB: ${process.env.DATABASE_NAME}`);
  })
  .catch((error) => {
      console.error("Error during Data Source initialization:\n", error);
  });

app.listen(process.env.PORT, async () => { console.log(`Server running at http://localhost:${process.env.PORT}/`) });