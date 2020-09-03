import React from 'react';

import axios from "axios";


class Users extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            allusers:[]
        }
    }

    componentWillMount(){
        console.log('users component will be mounted!');
        this.getAllUsers()
    }

    componentDidMount(){
        console.log("users component is mounted!");
    }

    componentWillUpdate(){

    }

    componentDidUpdate(){

    }

    getAllUsers=()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                console.log(response);
                console.log(response.data);
                this.setState({allusers: response.data})
                console.log(this.state.allusers);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    renderAllUsers=()=>{
        return this.state.allusers.map(user=>{
            return(
                <li key={user.id}>{user.name}</li>
            )
        })
    }

    render() { 

        if(this.state.allusers.length == 0){
            return (  
                <div>
                    List of users is being loaded ....
                </div>
            )    
        }else{
            return(
                <div>
                    <ol>
                        {this.renderAllUsers()}
                    </ol>
                </div>
            )
        }
        
    }
}
 
export default Users;