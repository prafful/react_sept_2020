import React from 'react';
import axios from "axios";

class ReviewForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            buttonStatus:true,
            title:'',
            description:'',
            likes:0
        }
    }

   
    getTitle=(event)=>{
        console.log('getTitle called....');
        console.log(event.target.value);
        console.log(event.target.value.length);
        if(event.target.value.length > 3){
            this.setState({
                buttonStatus: false,
                title: event.target.value
            })
        }else{
            this.setState({
                buttonStatus: true,
                title: event.target.value
            })
        }
    }

    getDescription=(event)=>{
        this.setState({description: event.target.value})
    }

    addReview=()=>{
        var tempNewReview = {
            "title": this.state.title,
            "description":this.state.description,
            "likes": this.state.likes
        }

        axios.post('http://localhost:3000/reviews',tempNewReview)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        title:'',
                        description:'',
                        likes:0
                    })
                })
                .catch(err=>{
                    console.log(err);
                })
    }

    render() { 
        return ( 
            <div style={{padding:"5px", margin:'10px', border:'1px dashed red' , backgroundColor:"lightcoral"}}>
                Review form:
                <br></br>
                Title: <input type='text' value={this.state.title} onChange={this.getTitle}></input>
                {
                    this.state.buttonStatus &&  <span>Minimum length of title is 3!</span>
                }
                <br></br>
          
                Description: <input type='text' value={this.state.description} onChange={this.getDescription}></input>
                <br></br> 

                Likes: <input type='text' value={this.state.likes}  readOnly></input>
                <br></br>
                <button disabled={this.state.buttonStatus} onClick={this.addReview}>Add</button>
                
   
            </div>
         );
    }
}
 
export default ReviewForm;