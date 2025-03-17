import TodoReduxForm from "./TodoReduxForm.jsx";
import TodoReduxList from "./TodoReduxList.jsx";
import { Provider } from 'react-redux';
import store from './store.jsx';

const TodoReduxApp = () => {

    return (
        <Provider store={store} >
            <div className="App">
                <h1 className="text-center text-2xl">Todo List</h1>
                <TodoReduxForm />
                <TodoReduxList />
            </div>
        </Provider>
    );
}

export default TodoReduxApp;
