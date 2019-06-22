import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import uuid from 'uuid';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/About";

class App extends React.Component {
    state = {
        todos: [
            {id: uuid.v4(), title: 'Do the chores', status: false},
            {id: uuid.v4(), title: 'Feed the fish', status: false},
            {id: uuid.v4(), title: 'Do the homework', status: false},
        ]
    };

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (id === todo.id) {
                    todo.status = !todo.status;
                }
                return todo;
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            status: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
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
}

export default App;
