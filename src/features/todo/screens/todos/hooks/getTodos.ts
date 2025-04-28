import { useCallback, useEffect, useState } from "react"
import { getTodos } from "../../../../../data/api"
import { Todo } from "../../../../../models/todo";


export const useGetTodos = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const getTodosData = useCallback( async () => {
        const data = await getTodos();
        setTodos(data);
    }, [])

    useEffect(() => {
        getTodosData();
    }, [getTodosData])

    return todos;

}