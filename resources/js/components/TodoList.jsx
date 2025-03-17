import {useContext} from "react";
import {TodoListContext} from "./TodoApp.jsx";

const TodoList = () => {
    const { todoList, completeTask, removeTask } = useContext(TodoListContext);

    return (
        <div className="todo-list-container">
            {todoList.map((todo) => (
                <div key={todo.id} className="todo-container">
                    <label style={{backgroundColor: todo.completed ? "green" : ""}}>{todo.name}</label>
                    <button type="button" onClick={() => {completeTask(todo)}}
                            className="todo-list__complete text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Complete</button>
                    <button type="button" onClick={() => {removeTask(todo)}}
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
