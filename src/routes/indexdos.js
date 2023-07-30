const express = require('express');
const router = express.Router();
const Taskdos = require('../models/taskdos.js');

router.get('/', async (req, res) => {
  const tasksdos = await Taskdos.find();
  res.json(tasksdos);
  //res.render('index', {
   //tasks
  //});
});

router.post('/adddos', async (req, res, next) => {
  const task = new Taskdos(req.body);
  console.log(req.body)
  await task.save();
  res.redirect('/');
});

router.delete('/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    await Taskdos.deleteOne({_id: id});
    res.redirect('/');
  });

  router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Taskdos.findById(id);
    res.render('edit', {
      task
    });
  });  

  router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Taskdos.update({_id: id}, req.body);
    res.redirect('/');
  }); 

module.exports = router;
