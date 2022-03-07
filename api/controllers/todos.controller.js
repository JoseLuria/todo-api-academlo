const { getBodyParams } = require('../utils/getBodyParams');
const { Todos } = require('../models/todos.model');

exports.getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todos.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: {
        todos: allTodos
      }
    });
  } catch (error) {
    console.error(error);
  }
};

exports.getIndividualTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const individualTodo = await Todos.findOne({
      where: {
        id,
        status: 'active'
      }
    });

    if (!individualTodo) {
      res.status(404).json({
        status: 'error',
        message: 'That todo does not exist'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        todo: individualTodo
      }
    });
  } catch (error) {
    console.error(error);
  }
};

exports.createNewTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const newTodo = await Todos.create({
      title: title,
      completed: false,
      status: 'active'
    });

    res.status(201).json({
      status: 'success',
      data: {
        todo: newTodo
      }
    });
  } catch (error) {
    console.error(error);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const individualTodoData = getBodyParams(req.body, 'title', 'completed');

    const individualTodo = await Todos.findOne({
      where: {
        id,
        status: 'active'
      }
    });

    if (!individualTodo) {
      res.status(400).json({
        status: 'error',
        message: 'Sorry but we cant update that Todo'
      });
    }

    await individualTodo.update({ ...individualTodoData });

    res.status(204).json({ status: 'sucess' });
  } catch (error) {
    console.error(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const individualTodo = await Todos.findOne({ where: { id } });

    if (!individualTodo) {
      res.status(400).json({
        status: 'error',
        message: 'Sorry but we cant delete that Todo'
      });
    }

    await individualTodo.update({ status: 'deleted' });

    res.status(204).json({ status: 'sucess' });
  } catch (error) {
    console.error(error);
  }
};
