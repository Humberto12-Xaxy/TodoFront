import { useCallback, useEffect, useState } from "react";
import { Todo } from "../../../../../models/todo";
import { getTodoById } from "../../../../../data/api";
import { useParams } from "react-router";



export const useGetTodo = () => {

    const [data, setData] = useState<Todo | null>(null);
    const params = useParams<{ id: string }>();

    const getTodoData = useCallback(async () => {
        console.log(params.id);
        const id = params.id;
        if (!id) return;
        const data = await getTodoById(Number(id));
        setData(data);
    }, [params]);

    useEffect(() => {
        getTodoData();
    }, [getTodoData]);

    const { id } = params;
    return { data, id };
}