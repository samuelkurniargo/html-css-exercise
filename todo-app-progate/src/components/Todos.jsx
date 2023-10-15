/* eslint-disable react/prop-types */
import TodoItems from "./TodoItems";

export default function Todos({ todos, completeTodo, deleteTodo, editTodo }) {
  return (
    <div className="card w-96 bg-neutral-700 text-neutral-content">
      {todos.map((todo) => {
        return (
          <TodoItems
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}
