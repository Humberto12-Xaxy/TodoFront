import { Link, useNavigate } from "react-router";

export const AppBarComponent = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add-todo', { replace: true });
        window.location.reload();
    }


    return (
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-3xl">TODO App</h1>
            <nav>
                <ul className="flex space-x-7">
                    <li className="flex justify-center items-center"><Link to={'/'}>Home</Link></li>
                    <button className="bg-amber-900 h-10 w-20 rounded-md flex justify-center items-center" onClick={handleClick}>Add TODO</button>
                </ul>
            </nav>
        </div>
    );
}