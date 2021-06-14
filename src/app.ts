import express, { Application, Request, Response, NextFunction } from 'express';

import bodyParser from 'body-parser';

import { validationError, internalServerError } from 'middlewares/error';

import routes from 'routes';

import { createDoc } from 'apidoc';

const doc = createDoc({
  src: './src',
  dest: `${__dirname}/doc`,
});

if (typeof doc !== 'boolean') {
  // Documentation was generated!
  console.log('Documentation was generated!');
}

const app: Application = express();

app.disable('x-powered-by');

// Applying CORS for the Swagger
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Parsing JSON request body
app.use(
  bodyParser.json({
    limit: 81920,
  }),
);

app.use(express.static(`${__dirname}/doc`));

// API Doc
app.use('/api-doc', (req, res) => res.sendFile(`${__dirname}/doc/index.html`));

// Registering routes
app.use(routes);

// Handling express-validation errors
app.use(validationError);

// Handling express-validation errors
app.use(internalServerError);

export default app;
