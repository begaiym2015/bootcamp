// import React, { Component } from 'react';

// class Delete extends Component {

//     shouldComponentUpdate(nextProps){
//         if(nextProps !== this.props){
//             this.deleteTask()
//             return true 
//         }else return false

//     }

//     // componentDidMount(){
//     //     console.log('mounted')
//     // }

//     // UNSAFE_componentWillMount(){
//     //     console.log('willmount')
//     // }
//     UNSAFE_componentWillReceiveProps(){
//         this.deleteTask()
//     }

//     deleteTask = () =>{
//         if(this.props.deleteId !== null){
    
//         let newArr = [...this.props.data]
//         let deleteId = this.props.deleteId
//         newArr.splice(deleteId,1)

//         this.props.onChange(newArr)
//     }
// }

//     render() {

//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default Delete;