const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');

router.get('/get', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
 
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

router.post('/add', async (req, res, next) => {
  //const task = new Task(req.body);
  const {  name, title, image, description, price, amount, amountdos, amounttres } = req.body;
  const task = new Task({name, title, image, description, price, amount, amountdos, amounttres});

  console.log(req.body)
  await task.save();
  res.redirect('/');
});

router.delete('/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    await Task.deleteOne({_id: id});
    res.redirect('/');
  });

 

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { name, title, image, description, price, amount, amountdos, amounttres } = req.body;
  const newTask = {name, title, image, description, price, amount, amountdos, amounttres};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

module.exports = router;
