import React, { Component } from 'react'
import PropTyes from 'prop-types';
import { toUnicode } from 'punycode';

export class TodoItem extends Component {

    btnStyle = () => {
        return{
            background: 'red',
            float: 'rigth',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            margin: '10px',
            cursor: 'Pointer'
        }
    }
    render() {
        var style;
        if (this.props.item.completed){
            style = {textDecoration: 'line-through'}
        }
        const {id,title} = this.props.item
        return (
            <div>
                <h5 
                    style= {style}>
                    <input 
                        type= "checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}>
                    </input>
                    {title}
                    <button  onClick={this.props.removeTodo.bind(this,id)} style={this.btnStyle()}>x</button>
                </h5>
            </div>
        )
    }
}
TodoItem.propTyes= {
    item: PropTyes.object.isRequired
}

export default TodoItem
