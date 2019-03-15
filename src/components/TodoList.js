import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    const todos = props.todos;
    const todoList = todos.map((todo) =>
        <TodoItem
            key={todo.toString()}
            value={todo}
        />
    );
    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default TodoList;