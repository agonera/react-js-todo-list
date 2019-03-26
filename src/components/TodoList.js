import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import '../styles/TodoApp.css';


const TodoList = props => {

    const todoList = props.todoList.map(({ id, text, done }) => {
        return (
            <TodoItem
                key={id}
                id={id}
                text={text}
                done={done}
                markTodoDone={props.markTodoDone}
                removeTodo={props.removeTodo}
            />
        );
    });

    return <div className="todo-list">{todoList}</div>;
};


TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    markTodoDone: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
};


export default TodoList;


