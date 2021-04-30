//npm init -y
//npm install --save express
//package.json: "type": "module",
//npm install --save-dev nodemon
//package.json: "start": "nodemon index.js"

import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  console.log('[TEST]!');
  res.send('Hello from Homepage.');
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`),
);
