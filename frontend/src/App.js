import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Form from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";

import "./App.css";

const App = () => {
  // State
  const [todos, setTodos] = useState([]);

  const apiRoute = "http://localhost:4000/api/v1/todos/";

  const addTodo = async (todo) => {
    console.log(todo);
    await axios.post(apiRoute, { title: todo.title }); // req.body.content

    setTodos((prevState) => [...prevState, todo]);
  };

  const fetchTodos = async () => {
    const res = await axios.get(apiRoute);

    const resTodos = res.data.data.todos;
    console.log(resTodos);
    setTodos(resTodos);
  };

  const editTodo = async (id, newContent) => {
    await axios.patch(`${apiRoute}${id}`, { title: newContent });

    setTodos((prevState) => {
      const currentTodos = prevState;

      const todoIndex = currentTodos.findIndex((todo) => +todo.id === +id);

      const updatedTodo = currentTodos[todoIndex];

      updatedTodo.content = newContent;

      currentTodos[todoIndex] = updatedTodo;

      return [...currentTodos];
    });
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${apiRoute}${id}`);

    setTodos((prevState) => {
      const currentTodos = prevState;

      const updatedTodos = currentTodos.filter((todo) => +todo.id !== +id);

      return [...updatedTodos];
    });
  };

  // When component is mounted, fetch todos
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <Form onAddTodo={addTodo} />
      <TodoList onDeleteTodo={deleteTodo} onEditTodo={editTodo} items={todos} />
    </div>
  );
};

export default App;
