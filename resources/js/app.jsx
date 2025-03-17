import '../css/app.css'
import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoApp from "./components/TodoApp.jsx";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <TodoApp />
);
