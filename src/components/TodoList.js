import React from 'react';
import TodoItem from './TodoItem';


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
                />
            );
        });

        return <ul>{todoList}</ul>;
    }
}

export default TodoList;

