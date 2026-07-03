import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";
import { useState } from "react";
import { addTodo, deleteTodo } from "./todoSlice";

export default function TodoApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.list);
  const todoDispatch = useDispatch();
  const handleAdd = () => {
    if (text === "") return;
    todoDispatch(addTodo(text));
    setText("");
  };
  return (
    <>
      <hr />

      <h1>할 일 목록</h1>
      <p>
        목록입력:{" "}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </p>
      <br />
      <button type="text" onClick={handleAdd}>
        추가
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => todoDispatch(deleteTodo(todo.id))}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
}
