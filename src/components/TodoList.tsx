import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getTodoList } from "../api/todoListApi";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoItemWrapper,
} from "../styles/TodoFormStyle";
import { IsDoneWrapper, TodoContent, TodoTitle } from "../styles/TodoListStyle";
import TodoDelete from "./TodoDelete";
import TodoToggle from "./TodoToggle";
import { Todos } from "../pages/MainPage";

function TodoList() {
  const navigation = useNavigate();
  const ref = useRef(null);
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

  const detailPageEventHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => {
    // const element = ref.current;
    // if (element)
    //   return element.removeEventListener("click", detailPageEventHandler);
    if (event.target !== event.currentTarget) {
      return console.log("여기가 클릭되었다");
    } // 버튼만 제외해야 하는데 모든 항목이 제외가 되어버렸다. 이것을 사용하려면 구조를 다 바꿔야 한다.
    const goDetailPage = () => {
      navigation(`/${id}`);
    };
    goDetailPage();
  };

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
                    <TodoItemWrapper
                      onClick={(event) => {
                        detailPageEventHandler(event, todo.id);
                      }}
                    >
                      <TodoTitle> {todo.todoTitle} </TodoTitle>
                      <InputDataWrapper>
                        <TodoContent> {todo.todoContent} </TodoContent>
                        <TodoContent> {todo.todoDate} </TodoContent>
                        <ButtonWrapper>
                          <TodoToggle id={todo.id} todo={todo} />
                          <TodoDelete id={todo.id} />
                        </ButtonWrapper>
                      </InputDataWrapper>
                    </TodoItemWrapper>
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
                    <TodoItemWrapper>
                      <TodoTitle> {todo.todoTitle} </TodoTitle>
                      <InputDataWrapper>
                        <TodoContent> {todo.todoContent} </TodoContent>
                        <TodoContent> {todo.todoDate} </TodoContent>
                        <ButtonWrapper>
                          <TodoToggle id={todo.id} todo={todo} />
                          <TodoDelete id={todo.id} />
                        </ButtonWrapper>
                      </InputDataWrapper>
                    </TodoItemWrapper>
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
