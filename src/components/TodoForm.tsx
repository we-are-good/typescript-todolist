import React from "react";
import { Todos } from "../App";

import {
  ButtonWrapper,
  InputDataWrapper,
  TodoContentTextarea,
  TodoTitleInput,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";

function TodoForm({
  todoTitle,
  setTodoTitle,
  todoContent,
  setTodoContent,
  todoDate,
  setTodoDate,
  isDone,
}: {
  setTodoList: React.Dispatch<React.SetStateAction<Todos | undefined>>;
  todoTitle: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  todoContent: string;
  setTodoContent: React.Dispatch<React.SetStateAction<string>>;
  todoDate: string;
  setTodoDate: React.Dispatch<React.SetStateAction<string>>;
  isDone: boolean;
}) {
  const addTodo = ({
    setTodoList,
  }: {
    setTodoList: (cb: (todoList: Todos[]) => Todos[]) => void;
  }) => {
    const newTodo: Todos = {
      id: Math.random(),
      todoTitle,
      todoContent,
      todoDate,
      isDone,
    };

    setTodoList((prev) => [newTodo, ...prev]);
    setTodoTitle("");
    setTodoContent("");
    setTodoDate("");
  };

  function titleEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoTitle(event.target.value);
  }
  function contentEventHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTodoContent(event.target.value);
  }
  function dateEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoDate(event.target.value);
  }

  return (
    <>
      <TodoTitleWrapper>
        <TodoTitleInput
          placeholder="Todo Title"
          value={todoTitle}
          onChange={titleEventHandler}
        />
        <InputDataWrapper>
          <TodoContentTextarea
            placeholder="Todo Content"
            value={todoContent}
            onChange={contentEventHandler}
          />
          <input type="date" value={todoDate} onChange={dateEventHandler} />
          <ButtonWrapper>
            <button
              onClick={() => {
                addTodo;
              }}
            >
              등록
            </button>
          </ButtonWrapper>
        </InputDataWrapper>
      </TodoTitleWrapper>
    </>
  );
}

export default TodoForm;
