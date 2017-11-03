import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import ReposListPage from './pages/ReposListPage';
import NotFoundPage from './pages/NotFoundPage';
import Repo from './components/Repo';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...ReposListPage,
        path: '/repos',
        routes: [
          {
            ...Repo,
            path: '/repos/:repoId',
            exact: true
          }
        ]
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
