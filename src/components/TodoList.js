import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import '../styles/TodoApp.css';


class TodoList extends React.Component {

    render() {
        const todoList = this.props.todoList.map(todoItem => {
            return (
                <TodoItem
                    key={todoItem.id}
                    id={todoItem.id}
                    text={todoItem.text}
                    done={todoItem.done}
                    markTodoDone={this.props.markTodoDone}
                    removeTodo={this.props.removeTodo}
                />
            );
        });

        return <div className="todo-list">{todoList}</div>;
    }
}


TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    markTodoDone: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
};

export default TodoList;


