import React from 'react';
import './App.css';
import List from './components/List/List';
import AddTask from './components/AddTask/AddTask';

class App extends React.Component {
  state = {
    data:[
    {
     title:'Mike',
      status: false    
    },
    {
     title:'Millke',
      status: true
    },
    {
     title:'Mifffke',
      status: false
    },
    {
     title:'Mifffke',
      status: false
    }
  ]
}
handleAdd = (user) => {
  const newData = [...this.state.data];
  newData.push(user);
  this.setState ({ data: newData});

}
handleDelete = (index) => {
  const newData = [...this.state.data]
  newData.splice(index,1)
  this.setState({ data:newData})

}
handleChangeStatus = (index)=> {
  const newData =[...this.state.data]
  newData[index].status = !newData[index].status
  this.setState({data: newData })

}

  render (){
    return (
      <div className="App">

      <AddTask onAdd = { this.handleAdd}
      />

      <List 
       data={this.state.data}
       onChange={this.handleChangeStatus} 
       onDelete={this.handleDelete} />
     
      </div>
    )
  }
}

export default App;
