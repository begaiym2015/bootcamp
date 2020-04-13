import React, { Component } from 'react';

import AddContact from './conponents/AddContact/AddContact';
import List from './conponents/List/List';

class App extends Component {
  state = {
    contact:[
    {
      name:'Mike',
      surname: 'Milka',
      age: 20
    },
    {
      name:'Millke',
      surname: 'Milkabek',
      age: 203
    },
    {
      name:'Mifffke',
      surname: 'Milkovich',
      age: 204
    },
    {
      name:'Mifffke',
      surname: 'Milkov',
      age: 201
    }
  ]
}

handleAdd = (user) => {
  const newData = [...this.state.contact];
  newData.push(user);
  this.setState ({ contact: newData})

}



  render() {
    return (
      <div className="add">
         <AddContact onAdd = {this.handleAdd} />

         <List 
         contact = {this.state.contact}
         />
        
      </div>
    );
  }
}

export default App;