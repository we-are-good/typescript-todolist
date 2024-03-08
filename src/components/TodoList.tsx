import { useQuery } from "@tanstack/react-query";
import { Todos } from "../App";
import { getTodoList } from "../api/todoListApi";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";
import { IsDoneWrapper, TodoContent, TodoTitle } from "../styles/TodoListStyle";
import TodoDelete from "./TodoDelete";
import TodoToggle from "./TodoToggle";

function TodoList() {
  const {
    isLoading,
    error,
    data: todoList,
  } = useQuery<Todos[]>({
    queryKey: ["todos"],
    queryFn: getTodoList,
  });
  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error instanceof Error) {
    return <div>Error!</div>;
  }
  if (!todoList) return;

  return (
    <div>
      <div>
        <IsDoneWrapper>Working</IsDoneWrapper>
        {todoList.map((todo) => {
          return (
            <div key={todo.id}>
              {!todo.isDone && (
                <div>
                  <div key={todo.id}>
                    <TodoTitleWrapper>
                      <TodoTitle> {todo.todoTitle} </TodoTitle>
                      <InputDataWrapper>
                        <TodoContent> {todo.todoContent} </TodoContent>
                        <TodoContent> {todo.todoDate} </TodoContent>
                        <ButtonWrapper>
                          <TodoToggle id={todo.id} todo={todo} />
                          <TodoDelete id={todo.id} />
                        </ButtonWrapper>
                      </InputDataWrapper>
                    </TodoTitleWrapper>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <IsDoneWrapper>Done</IsDoneWrapper>
        {todoList.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.isDone && (
                <div>
                  <div>
                    <TodoTitleWrapper>
                      <TodoTitle> {todo.todoTitle} </TodoTitle>
                      <InputDataWrapper>
                        <TodoContent> {todo.todoContent} </TodoContent>
                        <TodoContent> {todo.todoDate} </TodoContent>
                        <ButtonWrapper>
                          <TodoToggle id={todo.id} todo={todo} />
                          <TodoDelete id={todo.id} />
                        </ButtonWrapper>
                      </InputDataWrapper>
                    </TodoTitleWrapper>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
