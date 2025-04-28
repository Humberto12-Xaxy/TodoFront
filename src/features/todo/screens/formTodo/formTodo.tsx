import { useState } from "react";
import { completeTodo, createTodo } from "../../../../data/api";
import { useNavigate } from "react-router";
import { Todo } from "../../../../models/todo";
import { useGetTodo } from "./hooks/getTodo";


export const FormTodo = () => {

    const navigate = useNavigate();

    const [todo, setTodo] = useState<Todo | null>();
    const { data, id } = useGetTodo();



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (id) {
            completeTodo(Number(id));
            navigate("/");
        } else {
            createTodo(todo!);
            navigate("/");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-fit mt-10">
            <form onSubmit={handleSubmit} className="w-md">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input type="text" id="title" onChange={e => { setTodo({ ...todo!, title: e.target.value }) }} disabled={id ? true : false} value={data?.title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Todo Title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea id="description" onChange={e => { setTodo({ ...todo!, description: e.target.value }) }} disabled={id ? true : false} value={data?.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Todo Description"></textarea>
                </div>
                <button type="submit" disabled={data?.completed} className={`${data?.completed ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>{id ? 'Mark as Complete' : 'Save Todo'}</button>
            </form>
        </div>
    );
}
