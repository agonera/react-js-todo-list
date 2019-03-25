import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoApp.css';


class TodoForm extends React.Component {

    state = { userInput: '' };

    componentDidMount() {
        this.nameInput.focus();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.nameInput.focus();
    }

    onInputChange = e => {
        this.setState({ userInput: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        if (this.state.userInput) {
            this.props.onTodoSubmit(this.state.userInput);
            this.setState({ userInput: '' });
        }

    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.onInputChange}
                        ref={input => {
                            this.nameInput = input;
                        }}

                    />

                    <button type="submit">+</button>
                </form>
            </div>
        );
    }
}


TodoForm.propTypes = {
    onTodoSubmit: PropTypes.func.isRequired
};

export default TodoForm;

