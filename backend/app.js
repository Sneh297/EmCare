import dotenv from 'dotenv';
import express from 'express';
import connectdb from './db/db.js';
import userRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 4500;
const app = express();

//Required Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/user', userRouter);

app.listen(PORT, () => {
  connectdb();
  console.log(`Server Started Listening ${PORT}`);
});
