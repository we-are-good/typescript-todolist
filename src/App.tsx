import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import dummydata from "./dummydata.json";

export interface Todos {
  id: number;
  todoTitle: string;
  todoContent: string;
  todoDate: string;
  isDone: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Todos[]>(dummydata);
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
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
