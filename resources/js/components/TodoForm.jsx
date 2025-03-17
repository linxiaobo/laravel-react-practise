import {useContext, useState} from "react";
import {TodoListContext} from "./TodoApp.jsx";

const TodoForm = () => {
    const { todoList, setTodoList } = useContext(TodoListContext);
    const [newTask, setNewTask] = useState("");
    const toggleNewTask = (event) => {
        setNewTask(event.target.value);
    }

    const addNewTodo = () => {
        const newTodoList = {
            id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
            name: newTask,
            completed: false
        }

        setTodoList([...todoList, newTodoList]);
        setNewTask("");
    }


    return (
        <div className="todo-form-container grid grid-cols-6 gap-4">
            <div className="col-span-4 col-start-3">
                <input type="text" value={newTask} onChange={toggleNewTask} className="todo-form__input float-left w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {newTask}
                <button type="button" onClick={addNewTodo}
                        className="todo-form__button float-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Task
                </button>
            </div>
        </div>
    );
}

export default TodoForm;
