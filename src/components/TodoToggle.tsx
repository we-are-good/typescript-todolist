import { useDispatch } from "react-redux";
import { Todos } from "../App";
import { updateTodo } from "../api/todoListApi";
import { toggleTodo } from "../redux/modules/todoListModule";

function TodoToggle({ id, todo }: { id: string; todo: Todos }) {
  const dispatch = useDispatch();

  const todoToggle = async () => {
    const isDoneToggle = { ...todo, isDone: !todo.isDone };
    dispatch(toggleTodo(id));

    await updateTodo(id, isDoneToggle);
    console.log(todo.isDone);
  };
  return <button onClick={todoToggle}>{todo.isDone ? "취소" : "완료"}</button>;
}

export default TodoToggle;
