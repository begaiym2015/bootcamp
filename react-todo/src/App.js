import React, { Component } from 'react';

import List from './components/List/List';
import AddTodo from './components/AddTodo/AddTodo';
// import Delete from './components/Delete/Delete';

import Edit from './components/Edit/Edit';


class App extends Component {

    state = {
        list:[
            {
                value:'NewTask',
                status: true
            },
            {
            value:'NewTask2',
            status: false
            }
        ],
        // deleteId:null
        isEdit: false,
        editId: null
    }

    handleTOdoList = list => {
        this.setState({ list })
    }

    handleEditId = editId =>{
            this.setState({ editId })
            this.setState({ isEdit: !this.state.isEdit })
        }

    // handleDeleteId = deleteId =>{
    //     this.setState({deleteId})
    // }

    render() {
        return (
            <div className="app">
                <AddTodo
                data = {this.state.list}
                onChange = {this.handleTOdoList}
                />
                  

                <List
                  data = {this.state.list}
                  onChange = {this.handleTOdoList}
                  handleEditId = {this.handleEditId}
                />

                {/* <Delete
                data={this.state.list}
                deleteId={this.state.deleteId}
                onChange = {this.handleTOdoList}
                /> */}

                <Edit 
                data = {this.state.list}
                editId = {this.state.editId}
                isEdit = {this.state.isEdit}
                onChange = {this.handleTOdoList}
                handleEditId = {this.handleEditId}
                />
                
            </div>
        );
    }
}

export default App;