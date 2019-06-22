import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import uuid from 'uuid';
import axios from 'axios';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/About";

class App extends React.Component {
    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => {
                alert(`An error has occurred during fetching data - ${err.message}`);
            })
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>

                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>

                            <Todos
                                todos={this.state.todos}
                                markComplete={this.markComplete}
                                delTodo={this.delTodo}
                            />
                        </React.Fragment>
                    )} />

                    <Route path="/about" render={About}/>
                </Router>
            </div>
        );
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (id === todo.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(() => {
                this.setState({
                    todos: [...this.state.todos.filter(todo => todo.id !== id)]
                })
            })
            .catch(err => {
                alert(`An error has occurred during deleting data - ${err.message}`);
            })
    }

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
            .then(res => {
                this.setState({
                    todos: [...this.state.todos, res.data]
                })
            })
            .catch(err => {
                alert(`An error has occurred during adding data - ${err.message}`);
            })
    }
}

export default App;
