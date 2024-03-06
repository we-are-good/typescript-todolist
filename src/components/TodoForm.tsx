import React, { useState } from "react";
import { Todos } from "../App";

import { useDispatch } from "react-redux";
import { addTodoList } from "../redux/modules/todoListModule";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoContentTextarea,
  TodoTitleInput,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";
import { createTodo } from "../api/todoListApi";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const [todoDate, setTodoDate] = useState<string>("");
  const dispatch = useDispatch();
  const addTodo = async () => {
    const randomId = () => {
      return Math.floor(Math.random() * 1000000000);
    };
    const newTodo: Todos = {
      id: randomId(),
      todoTitle,
      todoContent,
      todoDate,
      isDone: false,
    };
    console.log(randomId());
    dispatch(addTodoList(newTodo));
    createTodo(newTodo);

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
                addTodo();
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
