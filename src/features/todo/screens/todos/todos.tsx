import { TodoCard } from "./components/todoCard";
import { useGetTodos } from "./hooks/getTodos";


export const Todos = () => {
    const data = useGetTodos();


    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {
                data.map((todo) => (
                    <TodoCard key={todo.id} id={todo.id!} title={todo.title} description={todo.description} status={todo.completed} />
                ))
            }
        </div>


    );
}