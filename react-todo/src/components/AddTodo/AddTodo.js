import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        inputVal: ''
    }

    handleInput = event =>{
        // console.log(event.target.value)
        const inputVal = event.target.value
        this.setState({ inputVal })
    }

    handleClick = ()=>{
        const newArr = [...this.props.data]
        const value = this.state.inputVal

        const obj = {
            value,
            status:false
        }

        if(!value)return

        newArr.push(obj)
        this.props.onChange(newArr)

        this.setState({ inputVal: ''})
    }


    render() {
        return (
            <div className="add-todo">

                <input 
                value = {this.state.inputVal}
                onChange={this.handleInput}
                type="text"
                />

                <button onClick={this.handleClick}>AddTodo</button>
                
            </div>
        );
    }
}

export default AddTodo;