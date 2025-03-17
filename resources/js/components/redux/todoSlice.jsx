import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoList',
    initialState: {todoList: []},
    reducers: {
        addNewTask: (state, action) => {
            const todoList = state.todoList;
            const newTodoList = {
                id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
                name: action.payload,
                completed: false
            }

            state.todoList.push(newTodoList);
        },
        completeTask: (state, action) => {
            state.todoList = state.todoList.map((todo) => {
                if (action.payload.id === todo.id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });
        },
        removeTask: (state, action) => {
            state.todoList = state.todoList.filter((todo) => {
                return action.payload.id !== todo.id;
            });
        }
    }
});

// Action creators are generated for each case reducer function
export const { addNewTask, completeTask, removeTask } = todoSlice.actions;

export default todoSlice.reducer;
