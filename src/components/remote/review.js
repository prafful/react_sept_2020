import React from 'react';

class Review extends React.Component {
  
    render() { 
        return (
            <span>
                Title: {this.props.title} 
                <br></br>
                Description: {this.props.desc} 
                <br></br>
                Likes: {this.props.likes} 
                <hr></hr>
            </span>
          );
    }
}
 
export default Review;