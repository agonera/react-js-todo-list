import React from 'react';
import TodoList from './TodoList';
import InputBar from './InputBar';

function App() {
    const todos = ['todo1', 'todo2', 'todo3'];

    return (
        <div>
            <h1>Todo List</h1>
            <InputBar/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;



