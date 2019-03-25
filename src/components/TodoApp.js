import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/TodoApp.css';


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
            id: this.state.todos.length,
            text: userInput,
            done: false
        };

        this.setState(state => {
            // add at the end of array:
            const todos = [...state.todos, newTodo];
            // const todos = this.state.todos.concat(newTodo);
            // const todos = [newTodo, ...state.todos]; // adds at the beginning
            return { todos };
        });
    };

    removeTodo = id => {
        this.setState(state => {
            const todos = state.todos.filter(todo => todo.id !== id);
            return { todos };
        });

        // update other ids to avoid key duplicates
        this.setState(state => {
            const todos = state.todos.map((todo, newId) => {
                todo.id = newId;
                return todo;
            });
            return { todos };
        });
    };

    markTodoDone = id => {
        this.setState(state => {
            const todos = state.todos.map(todo => {
                if (id === todo.id) {
                    todo.done = !todo.done;
                }
                return todo;
            });
            return { todos };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <h1>Todo List</h1>
                <TodoForm onTodoSubmit={this.addTodo}/>
                <TodoList
                    todoList={this.state.todos}
                    markTodoDone={this.markTodoDone}
                    removeTodo={this.removeTodo}
                />
            </div>
        );
    }
}

export default TodoApp;

