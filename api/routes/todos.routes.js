const express = require('express');
const {
  getAllTodos,
  getIndividualTodo,
  createNewTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controller');

const router = express.Router();

// Get all Todos
router.get('/', getAllTodos);

// Get individual Todo
router.get('/:id', getIndividualTodo);

// Create a new Todo
router.post('/', createNewTodo);

// Update Todo
router.patch('/:id', updateTodo);

// Delete Todo
router.delete('/:id', deleteTodo);

module.exports = { todosRouter: router };
