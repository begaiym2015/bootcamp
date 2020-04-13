import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
    state = {
        name: '',
        surname: '',
        age: ''
    }

    handleChangeName = (e) =>{
        const name = e.target.value;
        this.setState({ name });
      
    }

    handleChangeSurname = (e) => {
        const surname = e.target.value;
        this.setState({ surname });
    }

    handleChangeAge = (e) => {
        const age = e.target.value;
        this.setState({ age })
    }

    handleAddContact = () => {
        this.props.onAdd(this.state)
    }
        // const obj={
        //     name,
        //     surname,
        //     age,
        //     status:false
        // }
        // if(!name && !surname && !age)return
        // newArr.push(obj)
        // this.props.onChange(newArr)
        // this.setState()
        

    

   

    render() {
        return (
            <div className="add-contact">
                <label>Name:</label>
                <input value={this.state.name} onChange={this.handleChangeName} />
                <label>Surname: </label>
                <input value={this.state.surname} onChange={this.handleChangeSurname} />
                <label>Age: </label>
                <input type="number" value={this.state.age} onChange={this.handleChangeAge}/>
                <button onClick={this.handleAddContact}>Add contact</button>
               
            </div>
        );
    }
}

export default AddContact;