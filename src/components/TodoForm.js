import React from 'react';
import PropTypes from 'prop-types';


class TodoForm extends React.Component {
    state = { userInput: '' };

    onInputChange = e => {
        this.setState({ userInput: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onTodoSubmit(this.state.userInput);
        this.setState({ userInput: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.onInputChange}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }
}


TodoForm.propTypes = {
    onTodoSubmit: PropTypes.func.isRequired
};

export default TodoForm;

