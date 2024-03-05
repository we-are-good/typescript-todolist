import {
  ButtonWrapper,
  InputDataWrapper,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";
import { TodoContent, TodoTitle } from "../styles/TodoListStyle";
import { Todos } from "../App";

function TodoList({ todoList }: { todoList: Todos[] }) {
  console.log(todoList);
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoTitleWrapper>
              <TodoTitle> {todo.todoTitle} </TodoTitle>
              <InputDataWrapper>
                <TodoContent> {todo.todoContent} </TodoContent>
                <TodoContent> {todo.todoDate} </TodoContent>
                <ButtonWrapper>
                  <button>{todo.isDone ? "완료" : "진행중"}</button>
                  <button>삭제</button>
                </ButtonWrapper>
              </InputDataWrapper>
            </TodoTitleWrapper>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
