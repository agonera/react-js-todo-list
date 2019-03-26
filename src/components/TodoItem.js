import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css';
import '../styles/TodoApp.css';


const TodoItem = props => {

    const onItemClick = () => {
        const { id } = props;
        props.markTodoDone(id);
    };

    const onRemoveClick = () => {
        const { id } = props;
        props.removeTodo(id);
    };

    const status = props.done ? 'done' : 'undone';

    return (
        <li className="todo-item" key={props.id}>
            <span className={status} onClick={onItemClick}>{props.text}</span>
            <span className="remove-item" onClick={onRemoveClick}>&#215;</span>
        </li>
    );
};


TodoItem.propTypes = {
    markTodoDone: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
    id: PropTypes.number,
    text: PropTypes.string
};

export default TodoItem;

