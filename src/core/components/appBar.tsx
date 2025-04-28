import { Link } from "react-router";

export const AppBarComponent = () => {

    return (
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-3xl">TODO App</h1>
            <nav>
                <ul className="flex space-x-7">
                    <li className="flex justify-center items-center"><Link to={'/'}>Home</Link></li>
                    <button className="bg-amber-900 h-10 w-20 rounded-md flex justify-center items-center" ><Link to={'add-todo'}>Add TODO</Link></button>
                </ul>
            </nav>
        </div>
    );
}