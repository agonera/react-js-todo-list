import React from 'react';

class InputBar extends React.Component {
    state = {userInput: ''};

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        onChange={e => this.setState({userInput: e.target.value})}
                        value={this.state.userInput}
                        placeholder="new todo"
                    />
                </form>
            </div>
        );
    }
}

export default InputBar;