import React from 'react';


class ReviewForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            buttonStatus:true
        }
    }

   
    getTitle=(event)=>{
        console.log('getTitle called....');
        console.log(event.target.value);
        console.log(event.target.value.length);
        if(event.target.value.length > 3){
            this.setState({buttonStatus: false})
        }else{
            this.setState({buttonStatus: true})
        }
    }

    render() { 
        return ( 
            <div style={{padding:"5px", margin:'10px', border:'1px dashed red' , backgroundColor:"lightcoral"}}>
                Review form:
                <br></br>
                Title: <input type='text' onChange={this.getTitle}></input>
                &nbsp;
                <button disabled={this.state.buttonStatus}>Add</button>
                {
                    this.state.buttonStatus &&  <span>Minimum length of title is 3!</span>
                
                }
   
            </div>
         );
    }
}
 
export default ReviewForm;