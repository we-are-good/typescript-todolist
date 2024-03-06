import { useDispatch } from "react-redux";
import { deleteTodoList } from "../redux/modules/todoListModule";

function TodoDelete({ id }: { id: number }) {
  const dispatch = useDispatch();

  const todoDelete = () => {
    dispatch(deleteTodoList(id));
  };
  return <button onClick={todoDelete}> 삭제 </button>;
}

export default TodoDelete;
