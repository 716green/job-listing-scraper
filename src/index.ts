import express from 'express';
import dotenv from 'dotenv';
import { dateTimeObj } from './utils/dateAndTime';

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
console.log(productHunt);
console.log(dateTimeObj);

app.get('/', (_req: any, res: any): void => {
  res.json({ hello: 'world' });
});

app.get(productHunt, (_req: any, res: any): void => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
