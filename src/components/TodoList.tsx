import { useSelector } from "react-redux";
import { Todos } from "../App";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";
import { IsDoneWrapper, TodoContent, TodoTitle } from "../styles/TodoListStyle";
import TodoDelete from "./TodoDelete";
import TodoToggle from "./TodoToggle";
import { RootState } from "../redux/config/configStore";

function TodoList() {
  const todoList: Todos[] = useSelector(
    (state: RootState) => state.todoList.todoList
  );

  return (
    <div>
      <div>
        <IsDoneWrapper>Working</IsDoneWrapper>
        {todoList.map((todo) => {
          return (
            <div>
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
            <div>
              {todo.isDone && (
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
      </div>
    </div>
  );
}

export default TodoList;
