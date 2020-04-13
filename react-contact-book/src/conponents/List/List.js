import React, { Component } from 'react';
import './List.css'

class List extends Component {

    // handleDelete = (index,event)=> {
    //     event.stopPropagation()
    //     let newArr = [...this.props.contact]
    //     newArr.splice(index,1)
    //     this.props.onChange(newArr)
    // }

    render() {
        const contact = this.props.contact
        return (

            <div className="list">
                {contact.map((user,index) =>{
                    return  <ul key={index}>
                        <li>
                        <div>Name: {user.name}</div>
                        <div>Surname: {user.surname}</div>
                        <div>Age: {user.age}</div>
                      </li>

                      {/* <button onClick={e => this.handleDelete(index,e)}
                           >Delete</button> */}
                   
                </ul>
                
                
                 })}
                
            </div>
        );
    }
}

export default List;