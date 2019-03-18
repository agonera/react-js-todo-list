import React from 'react';

class TodoForm extends React.Component {
    state = { userInput: '' };

    onInputChange = e => {
        this.setState({userInput: e.target.value});
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.whenUserSubmits(this.state.userInput);
        this.setState({userInput: ''});
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

export default TodoForm;

