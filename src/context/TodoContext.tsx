import { ReactNode, createContext, useState } from "react";

export const TodoContext = createContext<string | number | boolean>([]);
type StrictChildren<T> = T & { children: ReactNode };
export const TodoProvider: StrictChildren<string | number | boolean> = ({
  children,
}: {
  children: string | number | boolean;
}) => {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const [todoDate, setTodoDate] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        todoTitle,
        setTodoTitle,
        todoContent,
        setTodoContent,
        todoDate,
        setTodoDate,
        isDone,
        setIsDone,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
