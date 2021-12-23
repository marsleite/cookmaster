import express from 'express';
import { globalErrors } from './middleware/globalErrors';
import router from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(globalErrors);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${ PORT }`);
})
