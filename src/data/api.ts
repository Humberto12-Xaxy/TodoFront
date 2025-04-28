import axios from "axios";
import { Todo } from "../models/todo";

const conn = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/todo',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getTodos = async () => {
    const response = await conn.get<Todo[]>('/todos');

    const data = response.data;
    return data;
}

export const createTodo = async (todo: Todo) => {
    const response = await conn.post<Todo>('/todos/create', todo);

    const data = response.data;
    return data;
}

export const getTodoById = async (id: number) => {
    const response = await conn.get<Todo>(`/todos/${id}`);

    const data = response.data;
    return data;
}

export const completeTodo = async (id: number) => {
    const response = await conn.put<Todo>(`/todos/${id}/complete`);
    const data = response.data;
    return data;
}