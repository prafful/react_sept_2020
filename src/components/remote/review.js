import React from 'react';

class Review extends React.Component {

    deleteReview=()=>{
        console.log('Delete review with id: ' + this.props.id);
        this.props.deleteReviewProp(this.props.id)
    }

    editReview=()=>{
        console.log('Edit review with id: ' + this.props.id);
        this.props.editReviewProp(this.props.id)
    }
  
    render() { 
        return (
            <span>
                Id: {this.props.id}
                <br></br>
                Title: {this.props.title} 
                <br></br>
                Description: {this.props.desc} 
                <br></br>
                Likes: {this.props.likes} 
                <br></br>
                <button onClick={this.deleteReview}>Delete</button>
                &nbsp;
                <button onClick={this.editReview}>Edit</button>
                <hr></hr>
            </span>
          );
    }
}
 
export default Review;