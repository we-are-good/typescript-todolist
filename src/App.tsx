import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export interface Todos {
  id: string;
  todoTitle: string;
  todoContent: string;
  todoDate: string;
  isDone: boolean;
}

function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
