import { Todos } from "../App";

function TodoDelete({
  todoList,
  setTodoList,
  id,
}: {
  todoList: Todos[];
  setTodoList: React.Dispatch<React.SetStateAction<Todos[]>>;
  id: number;
}) {
  const todoDelete = () => {
    if (!confirm("정말 삭제하겠습니까?")) return;
    const deletedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedList);
  };
  return <button onClick={todoDelete}> 삭제 </button>;
}

export default TodoDelete;
