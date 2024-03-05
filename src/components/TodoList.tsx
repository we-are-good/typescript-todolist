import { Todos } from "../App";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";
import { TodoContent, TodoTitle } from "../styles/TodoListStyle";
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
      {todoList.map((todo) => {
        return (
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
        );
      })}
    </div>
  );
}

export default TodoList;
