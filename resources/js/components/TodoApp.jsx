import React, {createContext, useEffect, useState} from 'react';
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

export const TodoListContext = createContext(null);

const TodoApp = () => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const completeTask = (task) => {
        const newTodoList = todoList.map((todo) => {
            if (task.id === todo.id) {
                todo.completed = !todo.completed;
            }

            return todo;
        })

        setTodoList(newTodoList);
    }

    const removeTask = (task) => {
        const newTodoList = todoList.filter((todo) => {
            return task.id !== todo.id
        });
        setTodoList(newTodoList);
    }

    return (
        <TodoListContext.Provider value={{todoList, setTodoList, completeTask, removeTask}}>
            <div className="App">
                <h1 className="text-center text-2xl">Todo List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoListContext.Provider>
    );
}

export default TodoApp;
