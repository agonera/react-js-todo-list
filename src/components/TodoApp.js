import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


// STRUCTURE

//  TodoApp
//      TodoForm
//      TodoList
//          TodoItem #1
//          TodoItem #2
//          ...
//          TodoItem #N


class TodoApp extends React.Component {
    state = { todos: [] };

    addTodo = userInput => {
        const newTodo = {
            id: this.state.todos.length + 1,
            text: userInput,
            done: false
        };

        this.setState(state => {
            // add at the end of array:
            // const todos = [...state.todos, newTodo];
            // const todos = this.state.todos.concat(newTodo);
            const todos = [newTodo, ...state.todos]; // adds at the beginning
            return { todos };
        });

    };

    removeTodo = toRemove => {
    };

    markTodoDone = toUpdate => {

    };


    render() {
        return (
            <div>
                <TodoForm whenUserSubmits={this.addTodo}/>
                <TodoList todoList={this.state.todos} markTodoDone={this.markTodoDone}/>

            </div>
        );
    }
}

export default TodoApp;

