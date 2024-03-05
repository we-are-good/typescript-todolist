import { Todos } from "../App";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";
import { IsDoneWrapper, TodoContent, TodoTitle } from "../styles/TodoListStyle";
import TodoDelete from "./TodoDelete";
import TodoToggle from "./TodoToggle";

function TodoList({
  todoList,
  setTodoList,
}: {
  todoList: Todos[];
  setTodoList: React.Dispatch<React.SetStateAction<Todos[]>>;
}) {
  console.log(todoList);
  return (
    <div>
      <div>
        <IsDoneWrapper>진행중</IsDoneWrapper>
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
                          <TodoToggle
                            todoList={todoList}
                            setTodoList={setTodoList}
                            id={todo.id}
                            todo={todo}
                          />
                          <TodoDelete
                            todoList={todoList}
                            setTodoList={setTodoList}
                            id={todo.id}
                          />
                        </ButtonWrapper>
                      </InputDataWrapper>
                    </TodoTitleWrapper>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <IsDoneWrapper>완료</IsDoneWrapper>
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
                          <TodoToggle
                            todoList={todoList}
                            setTodoList={setTodoList}
                            id={todo.id}
                            todo={todo}
                          />
                          <TodoDelete
                            todoList={todoList}
                            setTodoList={setTodoList}
                            id={todo.id}
                          />
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
