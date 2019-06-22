import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    todoStyle = () => {
        const completed = this.props.todo.completed;

        return {
            backgroundColor: '#f4f4f4',
            padding: '.4rem',
            borderBottom: '1px solid #ddd',
            textDecoration: completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;

        return (
            <div style={this.todoStyle()}>
                <p>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}
                           style={{marginRight: '.5rem'}}
                           checked={completed}
                    />
                    {title}
                    <button
                        type="button"
                        style={btnStyle}
                        onClick={this.props.delTodo.bind(this, id)}>
                        X
                    </button>
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};


const btnStyle = {
    float: 'right',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#ff0000',
    padding: '2px 8px',
    borderRadius: '50%',
    fontWeight: 'bolder',
}

export default TodoItem;
