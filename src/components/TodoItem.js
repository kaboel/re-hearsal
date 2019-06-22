import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    todoStyle = () => {
        const status = this.props.todo.status;

        return {
            backgroundColor: '#f4f4f4',
            padding: '.4rem',
            borderBottom: '1px solid #ddd',
            textDecoration: status ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;

        return (
            <div style={this.todoStyle()}>
                <p>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}
                           style={{marginRight: '.5rem'}}/>
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
    todo: PropTypes.object.isRequired
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
