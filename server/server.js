import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import CoinGecko from 'coingecko-api';

// Dotenv init
dotenv.config();

// CoinGecko init
const CoinGeckoClient = new CoinGecko();

// Express init
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// Connection to mongoDB
mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB Connection - Succes'))
  .catch((error) => console.log(error.message));

