import React, { Component } from 'react';

import './list.css';
class List extends Component {

    handleChangeStatus = (item,index) => {
        const newArr = [...this.props.data]

        newArr[index].status = !newArr[index].status

        this.props.onChange(newArr)
    }

    handledelete = (index,event)=> {
        event.stopPropagation()

        let newArr = [...this.props.data]
        newArr.splice(index,1)

        this.props.onChange(newArr)

    }

    // handleDeleteId = index=>{
    //     this.props.handleDeleteId(index)
    // }


    render() {
        const data = this.props.data

        return (
            <div className="list">
                {data.map((item, index) => {
                   return <li 
                   className = {item.status ? 'completed':''}
                   onClick = {()=> this.handleChangeStatus(item,index)}
                   key={index}>
                       {item.value}
                       <button onClick={e => this.handledelete(index,e)}
                           >Delete</button>
                           <button onClick={e => {
                               e.stopPropagation()
                               this.props.handleEditId(index)}}
                               >Edit</button>
                       </li>
                })}
            </div>
        );
    }
}

export default List;