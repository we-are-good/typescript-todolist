import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export interface Todos {
  id: number;
  todoTitle: string;
  todoContent: string;
  todoDate: string;
  isDone: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Todos[]>([]);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const [todoDate, setTodoDate] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <>
      <Header />
      <TodoForm
        setTodoList={setTodoList}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoContent={todoContent}
        setTodoContent={setTodoContent}
        todoDate={todoDate}
        setTodoDate={setTodoDate}
        setIsDone={setIsDone}
        //콘솔에는 나타나지 않는 오류. isDone은 Todos에 포함되어 있어 속성은 포함되어 있음에도 속성 오류 발생.
        //작동 이상 없음.
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
