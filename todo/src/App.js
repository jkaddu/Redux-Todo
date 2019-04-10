import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from './actions/index';


class App extends Component {
    state = {
        newTodo: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addTodoList = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
    }

    toggleCompleted = id => {
        this.props.toggleCompleted(id);
    }
    render() {
        return (
            <>
            <div className='todo'>
            {this.props.todolist.map(item => (
                <h2>{item.todoItem}</h2>
            ))}
            </div>
            <input
             name='newTodo'
             type='text'
             placeholder='Add item'
             value={this.state.newTodo}
             onChange={this.handleChange}
             />
             <button onClick={this.addTodoList}>Add  Todo</button>
             </>
        )
    }
}

const mapStateToProps = state => ({
    todolist: state.items
})

export default connect(
    mapStateToProps,
    { addTodo, toggleCompleted }
)(App);


