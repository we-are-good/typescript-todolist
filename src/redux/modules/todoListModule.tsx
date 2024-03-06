import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dummydata from "../../dummydata.json";
import { Todos } from "../../App";

const initialState = {
  todoList: dummydata,
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<Todos>) => {
      state.todoList = [...state.todoList, action.payload];
      console.log(state.todoList);
    },
    deleteTodoList: (state, action: PayloadAction<number>) => {
      if (!confirm("정말 삭제하겠습니까?")) return;
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
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
  },
});

export default todoListSlice.reducer;
export const { addTodoList, deleteTodoList, toggleTodo } =
  todoListSlice.actions;
