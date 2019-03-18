import React from 'react';
import '../styles/TodoItem.css';


class TodoItem extends React.Component {

    onItemClick = () => {
        const id = parseInt(this.props.id);
        this.props.markTodoDone(id);
    };

    render() {
        const status = this.props.done ? 'done' : 'undone';
        return (
            <li
                key={this.props.id}
                className={`${status}`}
                onClick={this.onItemClick}
            >
                {this.props.text}
            </li>
        );
    };
}

export default TodoItem;

