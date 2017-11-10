import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from '../shared/Routes';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const PORT = process.env.port || 5000;
const app = express();

app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : Promise.resolve(null);
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then((data) => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 👂`);
});
