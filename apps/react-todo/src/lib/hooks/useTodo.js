import { useState } from "react";
import { v4 as uuidv4} from "uuid";

const useTodo = () => {
    const [todos, setTodos] = useState([]);


    const add = (projectId, title, description) => {
        setTodos(todos => [...todos, { title, description, projectId, id: uuidv4(), completed: false }]);
    }

    const toggle = (id) => {
        setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return [todos, add, toggle, remove];
}

export default useTodo;