import express from 'express';
import cors from 'cors';
import router from './app/router/index.mjs';
import globalErrorHandler from './app/middlewares/globalErrorHandler.mjs';
export const app = express();
import cookieParser from 'cookie-parser';
import httpStatus from 'http-status';

//required middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use('/api/v1', router);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

app.use(globalErrorHandler);
