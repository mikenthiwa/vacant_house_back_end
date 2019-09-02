import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  database: {
    dbName: process.env.DATABASE_NAME,
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  }
}
