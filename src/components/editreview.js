import React from 'react';


class EditReview extends React.Component {

    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location.state.myid);
    }
    
    render() { 
        return ( 
            <div>
                Edit Review!!!!: {this.props.location.state.myid}
            </div>
         );
    }
}
 
export default EditReview;