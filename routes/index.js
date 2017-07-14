const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const FRANK = {name: "Frank", age: 38, cool: true}
  // res.send('Hey! It works!');
  // res.json(FRANK) //send array as JSON
  // res.send(req.query.age) // specific query parameters
  // res.json(req.query) // all query parameters
  res.render('hello', {
    name:'Frank',
    cat: req.query.cat,
    title: 'Cats'
  })
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse)
})

module.exports = router;
