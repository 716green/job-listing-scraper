import express from 'express';
import dotenv from 'dotenv';

import { scraper } from './utils/scraper';
import { dateTimeObj } from './utils/dateAndTime';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const productHunt = 'https://www.producthunt.com/jobs';
const phXpath = '/html/body/div[1]/div[2]/main/div[2]/div[1]/div';
// const url = productHunt;

const sampleUrl = 'http://toscrape.com/';
const url = sampleUrl;
const sampleXPath = '/html/body/div/div[2]/div[1]';
const xpath = sampleXPath;

scraper(url, xpath);

// console.log(productHunt);
// console.log(dateTimeObj);

app.get('/', (_req: any, res: any): void => {
  res.json({ hello: 'world' });
});

app.get('/productHunt', (_req: any, res: any): void => {
  axios
    .get(productHunt)
    .then((results: any) => {
      let data = results.data;
      console.log({ data });
      fs.writeFileSync(path.join(__dirname + '/listings/ph.html'), data);
      fs.writeFileSync(path.join(__dirname + '/listings/ph.txt'), data);
      res.send(data);
    })
    .catch((err: Error) => {
      console.error(err.message);
      res.json({ error: err.message });
    });
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
