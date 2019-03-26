import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoApp.css';


class TodoForm extends React.Component {

    state = { userInput: '' };

    onInputChange = e => {
        this.setState({ userInput: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        const { userInput } = this.state;
        if (userInput) {
            const { onTodoSubmit } = this.props;
            onTodoSubmit(userInput);
            this.setState({ userInput: '' });
        }
    };

    render() {
        return (
            <div>
                <form className="todo-form" onSubmit={this.onFormSubmit}>
                    <input
                        className="input-field"
                        autoFocus
                        type="text"
                        value={this.state.userInput}
                        onChange={this.onInputChange}
                    />
                    <button className="submit-button" type="submit">+</button>
                </form>
            </div>
        );
    }
}


TodoForm.propTypes = {
    onTodoSubmit: PropTypes.func.isRequired
};

export default TodoForm;

