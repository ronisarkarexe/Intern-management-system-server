import express from 'express';
import cors from 'cors';
import router from './app/router/index.mjs';
export const app = express();

//required middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use('/api/v1', router);
