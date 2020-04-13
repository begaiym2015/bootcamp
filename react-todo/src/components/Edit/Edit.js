import React, { Component } from 'react';

import './edit.css';

class Edit extends Component {

    state = {
        currentTask:{
            value: '',
            status: false
        }
    }

    shouldComponentUpdate(nextProps , nextState){
        if(nextProps.editId !== this.props.editId){
            this.changeState(nextProps.data, nextProps.editId)
        }
        return true
    }

    changeState = (data,id) => {
        let value = data[id].value
        this.setState({ currentTask: {...this.state.currentTask, value}})

    }

    handleInput = event => {
        let value = event.target.value
        this.setState({ currentTask: {...this.state.currentTask, value}})
    }

    handleSave = () =>{
        const id = this.props.editId
        let data = [...this.props.data]

        const obj = {
            value: this.state.currentTask.value
        }
        data.splice(id,1,obj)
        this.props.onChange(data)
        this.props.handleEditId(id)

    }

    render() {
        const currentTask = this.state.currentTask
        return (
            <>
            {this.props.isEdit ? (
            <div className="modal-window">
                <div className="modal-body">
                    <input 
                    onChange = {e => this.handleInput(e)}
                    value={currentTask.value}
                    />
                    <button onClick={this.handleSave}>Save</button>
                </div>  
            </div>
            ): false}
            </>
        );
    }
}

export default Edit;