/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoForm(props) {
  const [title, setTitle] = useState(props.edit ? props.edit.name : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.edit ? props.submitEdit(title) : props.addTodo(title);
    setTitle("");
  };

  return (
    <form className="flex  my-4">
      {props.edit ? (
        <>
          {" "}
          <input
            type="text"
            name="editTodo"
            id="editTodo"
            style={{ color: "black" }}
            value={title}
            onChange={(e) => handleChange(e)}
          />
          <button className="rounded-none " onClick={(e) => handleSubmit(e)}>
            Edit Todo
          </button>{" "}
        </>
      ) : (
        <>
          <input
            type="text"
            name="addTodo"
            id="addTodo"
            style={{ color: "black" }}
            value={title}
            onChange={(e) => handleChange(e)}
          />
          <button className="rounded-none " onClick={(e) => handleSubmit(e)}>
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
