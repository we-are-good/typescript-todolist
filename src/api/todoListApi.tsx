import axios from "axios";
import { Todos } from "../App";

const baseURL = "http://localhost:5001/todoList";

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodoList = async () => {
  const { data } = await apiClient.get(`/`);
  return data;
};

export const createTodo = async (todo: Todos) => {
  await apiClient.post(`/`, todo);
};

export const deleteTodo = async (id: number) => {
  await apiClient.delete(`/${id}`);
};

export const updateTodo = async (id: number, todo: Todos) => {
  await apiClient.patch(`/${id}`, todo);
};
