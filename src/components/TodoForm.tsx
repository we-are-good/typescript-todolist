import React, { useState } from "react";
import { Todos } from "../App";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../api/todoListApi";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoContentTextarea,
  TodoTitleInput,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const [todoDate, setTodoDate] = useState<string>("");
  const queryClient = useQueryClient();

  const randomId = () => {
    return Math.floor(Math.random() * 1000000000).toString();
  };
  const newTodo: Todos = {
    id: randomId(),
    todoTitle,
    todoContent,
    todoDate,
    isDone: false,
  };

  const { error, mutate: todoListMutate } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  if (error instanceof Error) {
    return <div>Error!</div>;
  }

  const addTodo = async () => {
    if (!todoTitle || !todoContent) return alert("빈칸을 입력하세요.");
    todoListMutate(newTodo);
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
