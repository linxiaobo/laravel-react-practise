import TodoReduxForm from "./TodoReduxForm.jsx";
import TodoReduxList from "./TodoReduxList.jsx";
import { Provider } from 'react-redux';
import { store, persistor } from './store.jsx';
import { PersistGate } from 'redux-persist/integration/react';

const TodoReduxApp = () => {

    return (
        <Provider store={store} >
            <PersistGate loading={<div>loading</div>} persistor={persistor}>
                <div className="App">
                    <h1 className="text-center text-2xl">Todo List</h1>
                    <TodoReduxForm />
                    <TodoReduxList />
                </div>
            </PersistGate>
        </Provider>
    );
}

export default TodoReduxApp;
