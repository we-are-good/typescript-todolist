import axios from "axios";
import { Todos } from "../App";

const baseURL = "http://localhost:5001/todoList";

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodoList = async (): Promise<Todos[]> => {
  //promise 없어도 아래의 Todos로 데이터 타입 인식
  const { data } = await apiClient.get<Todos[]>(`/`);
  return data;
};

export const createTodo = async (todo: Todos) => {
  await apiClient.post(`/`, todo);
};

export const deleteTodo = async (id: string) => {
  await apiClient.delete(`/${id}`);
};
interface Data {
  id: string;
  todo: Todos;
}
export const updateTodo = async (data: Data) => {
  await apiClient.patch(`/${data.id}`, data.todo);
};
