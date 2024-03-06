import { configureStore } from "@reduxjs/toolkit";
import todoList from "../modules/todoListModule";

const store = configureStore({
  reducer: {
    todoList: todoList,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
