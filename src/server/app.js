import express from 'express';
const cloudinary = require('cloudinary').v2
import bodyParser from 'body-parser';
import cors from 'cors'
import dbConnection from '../database/models';
import {routes} from '../modules';


export const app = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(routes());

  app.get('*', (req, res) => {
    res.status(400).json({
      success: false,
      message: "Not found"
    })
  });

  dbConnection();
  return app;
};
