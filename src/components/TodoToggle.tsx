import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todos } from "../App";
import { updateTodo } from "../api/todoListApi";

function TodoToggle({ id, todo }: { id: string; todo: Todos }) {
  const queryClient = useQueryClient();

  const { error, mutate: todoToggleMutate } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  if (error instanceof Error) {
    return <div>Error!</div>;
  }

  const todoToggle = async () => {
    const isDoneToggle = { ...todo, isDone: !todo.isDone };
    todoToggleMutate({ id: id, todo: isDoneToggle });
  };
  return <button onClick={todoToggle}>{todo.isDone ? "취소" : "완료"}</button>;
}

export default TodoToggle;
