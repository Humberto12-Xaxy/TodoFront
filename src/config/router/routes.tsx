import { BrowserRouter, Route, Routes } from "react-router";
import { Todos } from "../../features/todo/screens/todos/todos";
import { AppBarComponent } from "../../core/components/appBar";
import { FormTodo } from "../../features/todo/screens/formTodo/formTodo";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <AppBarComponent />
            <Routes>
                <Route path="/" element={<Todos />} />
                <Route path="/add-todo" element={<FormTodo />} />
                <Route path="/mark-as-complete/:id" element={<FormTodo />} />
            </Routes>
        </BrowserRouter>
    );
}