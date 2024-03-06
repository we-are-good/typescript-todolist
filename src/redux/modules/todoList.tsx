import { createSlice } from "@reduxjs/toolkit";
import dummydata from "../../dummydata.json";
import { Todos } from "../../App";

const initialState: Todos[] = dummydata;

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.todoList = [...todoList, action.payload];
    },
  },
});

export default todoListSlice.reducer;
export const { addTodoList } = todoListSlice.actions;
