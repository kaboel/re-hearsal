import React from 'react';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <form style={style.form} onSubmit={this.onSubmit}>
                <input type="text"
                       name="title"
                       placeholder="Add Todo..."
                       style={style.todo}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type="submit"
                       name="submit"
                       value="Submit"
                       style={style.submit}
                />
            </form>
        )
    }
}

const style = {
    form: {
        display: 'flex'
    },
    todo: {
        flex: '10',
        padding: '5px'
    },
    submit: {
        fontWeight: 'bolder',
        flex: '1',
        backgroundColor: '#555',
        display: 'inline-block',
        border: 'none',
        color: '#fff',
        padding: '7px 20px',
        cursor: 'pointer'
    }
}

export default AddTodo;
