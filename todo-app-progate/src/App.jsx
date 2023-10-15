import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todos 1", isCompleted: false },
    { id: 2, name: "Todos 2", isCompleted: false },
  ]);

  const addTodo = (text) => {
    let id = todos.length + 1;
    let newTodo = {
      id: id,
      name: text,
      isCompleted: false,
    };

    const newData = [newTodo, ...todos];
    setTodos(newData);
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const editTodo = (id, text) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.name = text;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  return (
    <>
      <h1>My Todo </h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
