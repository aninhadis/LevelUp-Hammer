import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todo extends Component {

    render() {
        const tasks = this.props.tarefas.map(arrayItem => 
            <TodoItem key={arrayItem.id} item={arrayItem} markComplete={this.props.markComplete} removeTodo={this.props.removeTodo} addTodo={this.props.inserirTodo}/>)
        return (
            <div>
                {tasks}
            </div>
        )
    }
}

export default Todo
