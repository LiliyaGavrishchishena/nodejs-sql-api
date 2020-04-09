const {
  Router
} = require('express');
const Todo = require('../models/todo')
const router = Router();

// Get list of all todos
router.get('/', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: "Server error"
    })
  }
})

// Add new todo item
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false
    })
    res.status(201).json({
      todo
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: "Server error"
    })
  }
})

// Modify todo item
router.post('/:id', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: "Server error"
    })
  }
})

// Delete todo item
router.post('/:id', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: "Server error"
    })
  }
})

module.exports = router