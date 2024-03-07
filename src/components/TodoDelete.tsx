import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../api/todoListApi";

function TodoDelete({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const { error, mutate: todoDeleteMutate } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  if (error instanceof Error) {
    return <div>Error!</div>;
  }

  const todoDelete = () => {
    if (!confirm("정말 삭제하겠습니까?")) return;
    todoDeleteMutate(id);
  };
  return <button onClick={todoDelete}> 삭제 </button>;
}

export default TodoDelete;
