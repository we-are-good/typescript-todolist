import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todos } from "../App";
import { getTodoList } from "../api/todoListApi";
import { RootState } from "../redux/config/configStore";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";
import { IsDoneWrapper, TodoContent, TodoTitle } from "../styles/TodoListStyle";
import TodoDelete from "./TodoDelete";
import TodoToggle from "./TodoToggle";
import { viewTodoList } from "../redux/modules/todoListModule";

function TodoList() {
  const dispatch = useDispatch();
  const todoList: Todos[] = useSelector(
    (state: RootState) => state.todoList.todoList
  );

  useEffect(() => {
    const viewTodos = async () => {
      const data: Todos[] = await getTodoList();
      dispatch(viewTodoList(data));
    };
    viewTodos();
  }, [dispatch]);

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
