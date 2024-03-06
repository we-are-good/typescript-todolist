import { useDispatch } from "react-redux";
import { Todos } from "../App";
import { toggleTodo } from "../redux/modules/todoListModule";

function TodoToggle({ id, todo }: { id: number; todo: Todos }) {
  const dispatch = useDispatch();
  const todoToggle = () => {
    dispatch(toggleTodo(id));
    console.log(todo.isDone);
  };
  return <button onClick={todoToggle}>{todo.isDone ? "취소" : "완료"}</button>;
}

export default TodoToggle;
