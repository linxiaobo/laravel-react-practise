import '../css/app.css'
import './bootstrap';
import StrictMode from 'react';
import { createRoot } from 'react-dom/client';
import TodoApp from "./components/TodoApp.jsx";
import TodoReduxApp from "./components/redux/TodoReduxApp.jsx";


createRoot(document.getElementById('app')).render(
    <div>
        <TodoReduxApp />
    </div>
);
