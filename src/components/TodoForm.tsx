import React, { useState } from "react";
import { Todos } from "../pages/MainPage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../api/todoListApi";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoContentTextarea,
  TodoTitleInput,
  TodoItemWrapper,
} from "../styles/TodoFormStyle";

function TodoForm() {
  interface FormInterface {
    todoTitle: string;
    todoContent: string;
    todoDate: string;
  }
  const [formState, setFormState] = useState<FormInterface>({
    todoTitle: "",
    todoContent: "",
    todoDate: "",
  });
  const { todoTitle, todoContent, todoDate } = formState;
  const onChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

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
    todoListMutate(newTodo);
    setFormState({
      todoTitle: "",
      todoContent: "",
      todoDate: "",
    });
  };

  return (
    <>
      <TodoItemWrapper>
        <TodoTitleInput
          placeholder="Todo Title"
          name="todoTitle"
          value={todoTitle}
          onChange={onChangeHandler}
        />
        <InputDataWrapper>
          <TodoContentTextarea
            placeholder="Todo Content"
            name="todoContent"
            value={todoContent}
            onChange={onChangeHandler}
          />
          <input
            type="date"
            name="todoDate"
            value={todoDate}
            onChange={onChangeHandler}
          />
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
      </TodoItemWrapper>
    </>
  );
}

export default TodoForm;
