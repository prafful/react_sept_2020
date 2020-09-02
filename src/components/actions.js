import React from 'react';

class Actions extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            likes:8
        }

    }

   
    getInitalLikes=()=>{
        return this.intialLike
    }

    addLike=()=>{
        this.setState({likes: this.state.likes+1})   
    }

    minusLike=()=>{
        this.setState({likes: this.state.likes-1})
    }
   
    render() { 

        const like ={
            color:'green'
        }

        const dislike ={
            color:'red'
        }

        return ( 
            <span>
                <button style={like} onClick={this.addLike}>Like</button> &nbsp;
                {this.state.likes}
                &nbsp;
                <button style={dislike} onClick={this.minusLike}>Dislike</button>
            </span>
         );
    }
}
 
export default Actions;