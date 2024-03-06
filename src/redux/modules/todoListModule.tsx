import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todos } from "../../App";

export interface todoList {
  todoList: Todos[];
}

const initialState: todoList = {
  todoList: [],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<Todos>) => {
      state.todoList = [...state.todoList, action.payload];
      console.log(state.todoList);
    },
    deleteTodoList: (state, action: PayloadAction<string>) => {
      if (!confirm("정말 삭제하겠습니까?")) return;
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const findToggleTodo = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      const deleteTodo = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      if (!findToggleTodo) return console.log("일치하는 값이 없습니다.");
      findToggleTodo.isDone = !findToggleTodo.isDone;
      state.todoList = [...deleteTodo, findToggleTodo];
    },
    viewTodoList: (state, action: PayloadAction<Todos[]>) => {
      state.todoList = action.payload;
      console.log(state.todoList);
    },
  },
});

export default todoListSlice.reducer;
export const { addTodoList, deleteTodoList, toggleTodo, viewTodoList } =
  todoListSlice.actions;
