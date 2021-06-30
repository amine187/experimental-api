const express = require('express');

const firebase = require('firebase');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const firebaseConfig = {
  apiKey: 'AIzaSyCOGh6Zoq4xMepOlVH-ocbQJcwb4OOWJkU',
  authDomain: 'api-project-250622595269.firebaseapp.com',
  databaseURL: 'https://api-project-250622595269.firebaseio.com',
  projectId: 'api-project-250622595269',
  storageBucket: 'api-project-250622595269.appspot.com',
  messagingSenderId: '250622595269',
  appId: '1:250622595269:web:799d57b3839f723f6f60ac',
};

firebase.initializeApp(firebaseConfig);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
