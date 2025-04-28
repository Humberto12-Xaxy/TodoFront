import { useNavigate } from "react-router";

interface TodoCardProps {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

export const TodoCard = (props: TodoCardProps) => {

    const {id, title, description, status } = props;

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        // Handle click event, e.g., navigate to a detailed view or mark as complete
        console.log(`Todo clicked: ${title}`);
        navigate(`/mark-as-complete/${id}`);
    };

    return (
        <div onClick={() => {handleClick(id)}} className="bg-white shadow-md rounded-lg p-4 m-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <span className={`text-sm font-semibold ${status ? 'text-green-500' : 'text-red-500'}`}>
                    {status ? 'Completed' : 'Pending'}
                </span>
            </div>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}