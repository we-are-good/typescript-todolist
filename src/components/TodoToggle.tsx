import React from "react";
import { Todos } from "../App";

function TodoToggle({
  todoList,
  setTodoList,
  id,
  todo,
}: {
  todoList: Todos[];
  setTodoList: React.Dispatch<React.SetStateAction<Todos[]>>;
  id: number;
  todo: Todos;
}) {
  const todoToggle = () => {
    const toggleTodo = todoList.find((todo) => todo.id === id);
    if (!toggleTodo) return console.log("일치하는 값이 없습니다.");
    toggleTodo.isDone = !toggleTodo.isDone;
    setTodoList((prev) => [...prev, toggleTodo]);
  };
  return <button onClick={todoToggle}>{todo.isDone ? "취소" : "완료"}</button>;
}

export default TodoToggle;
