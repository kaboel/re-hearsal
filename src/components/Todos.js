import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render() {
        return this.props.todos.map(todo => (
            <div key={todo.id}>
                <TodoItem todo={todo}
                          markComplete={this.props.markComplete}
                          delTodo={this.props.delTodo}
                />
            </div>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;