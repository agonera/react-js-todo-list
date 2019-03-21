import React from 'react';
import '../styles/TodoItem.css';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {

    onItemClick = () => {
        const id = parseInt(this.props.id);
        this.props.markTodoDone(id);
    };

    onRemoveClick = () => {
        const id = parseInt(this.props.id);
        this.props.removeTodo(id);
    };

    render() {
        const status = this.props.done ? 'done' : 'undone';
        return (
            <li key={this.props.id}>
                <span onClick={this.onItemClick} className={`${status}`}>{this.props.text}</span>
                <span onClick={this.onRemoveClick}>	&#215;</span>
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

