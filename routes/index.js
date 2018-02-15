const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'Wes', age: 100, cool: true};
  // res.send('Hey! It works!');
  // res.json(wes);
  // res.send(req.query);
  // res.json(req.query);
  res.render('hello', {
    name: 'wes',
    dog: req.query.dog,
    title: 'I love food'
  });
});

// router.get('/reverse/:name', (req, res) => {
//   const reverse = [...req.params.name].reverse().join('');
//   res.send(reverse);
// });

module.exports = router;


//req: has all of the information
//res: has all the methods for sending data back
//res.query: to get query params
//res.params: used to access the things that are in the url