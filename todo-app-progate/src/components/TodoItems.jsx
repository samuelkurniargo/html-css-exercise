/* eslint-disable react/prop-types */
import { useState } from "react";
import TodoForm from "./TodoForm";

function TodoItems({ todo, completeTodo, deleteTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
  });

  const submitEdit = (name) => {
    editTodo(edit.id, name);
    setEdit({
      id: null,
      name: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} submitEdit={submitEdit} />;
  }

  return (
    <div className={todo.isCompleted ? "complete" : ""}>
      <div className="flex justify-between items-center border-2 p-2 rounded mb-2">
        <div className="todo-text">
          <input
            type="checkbox"
            name="todo-checkmark"
            id="todo-checkmark"
            className="mr-2"
            onClick={() => completeTodo(todo.id)}
          />
          {todo.name}
        </div>
        <div className="actions">
          <button
            className="btn-primary mr-1"
            onClick={() => setEdit({ id: todo.id, name: todo.name })}
          >
            Edit
          </button>
          <button className="btn-danger" onClick={() => deleteTodo(todo.id)}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
