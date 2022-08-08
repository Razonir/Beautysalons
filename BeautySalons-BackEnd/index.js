const express = require('express');

const bodyParser = require('body-parser');

const userRouter = require('./routes/user');
const reviewRouter = require('./routes/review');
const priceingRouter = require('./routes/priceing');
const businessRouter = require('./routes/business')
const photosRouter = require('./routes/photos')
const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3001;
 

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use('/user', userRouter);
app.use('/review', reviewRouter);
app.use('/priceing', priceingRouter);
app.use('/business', businessRouter);
app.use('/photos', photosRouter);

app.use(errorController.get404);

app.use(errorController.get500);


app.listen(process.env.PORT || ports, () => {
  console.log(`Listening on port ${ports}`);
});