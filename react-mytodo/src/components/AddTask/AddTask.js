import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    title: '',
    status: false
  }

  handleChangetitle = (e) => {
    const title = e.target.value;
    this.setState({ title });
  }


  handleAdd = () =>{
    this.props.onAdd(this.state);
    this.setState({ title:'' });
  }

  render() {

    return (
      <div classtitle="add-task">
        <label>Task</label>
        <input value={this.state.title} onChange={this.handleChangetitle} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddTask;
