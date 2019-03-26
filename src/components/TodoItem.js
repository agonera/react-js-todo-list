import React from 'react';
import '../styles/TodoItem.css';
import PropTypes from 'prop-types';
import '../styles/TodoApp.css';


class TodoItem extends React.Component {

    onItemClick = () => {
        const { id } = this.props;
        this.props.markTodoDone(id);
    };

    onRemoveClick = () => {
        const { id } = this.props;
        this.props.removeTodo(id);
    };

    render() {
        const status = this.props.done ? 'done' : 'undone';
        return (
            <li className="todo-item" key={this.props.id}>
                <span className={status} onClick={this.onItemClick}>{this.props.text}</span>
                <span className="remove-item" onClick={this.onRemoveClick}>&#215;</span>
            </li>
        );
    };
}


TodoItem.propTypes = {
    markTodoDone: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
    id: PropTypes.number,
    text: PropTypes.string
};

export default TodoItem;

