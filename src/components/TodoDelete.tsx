import { useDispatch } from "react-redux";
import { deleteTodo } from "../api/todoListApi";
import { deleteTodoList } from "../redux/modules/todoListModule";

function TodoDelete({ id }: { id: number }) {
  const dispatch = useDispatch();

  const todoDelete = () => {
    dispatch(deleteTodoList(id));
    deleteTodo(id);
  };
  return <button onClick={todoDelete}> 삭제 </button>;
}

export default TodoDelete;
