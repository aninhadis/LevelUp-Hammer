import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    changeInput = (e) => {
        this.setState({title: e.target.value})
        console.log(this.state.title)
    }
    onSubmit = (evento) =>{
        evento.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title:''})
    }

    render() {
        return (
                <form onSubmit={this.onSubmit}>
                    <input
                        type= "text"
                        name="newTask"
                        value={this.state.title}
                        placeholder="Nova Tarefa"
                        onChange= {this.changeInput}
                    ></input>
                </form>
        )
    }
}

export default AddTodo
