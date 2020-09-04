import React from 'react';
import axios from "axios";
import Review from './review';

class RemoteReview extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            reviews:[]
        }
    }

    componentWillMount(){
        this.loadAllReview()
    }

    loadAllReview=()=>{
        axios.get('http://localhost:3000/reviews')
                .then(response =>{
                    console.log(response);
                    console.log(response.data);
                    this.setState({reviews: response.data})
                    console.log(this.state.reviews);
                })
                .catch(error =>{
                    console.log(error);
                })
    }

    renderReviews=()=>{
        return this.state.reviews.map(r=>{
            return (
                <Review key={r.id} 
                        title={r.title}
                        desc={r.description}
                        likes={r.likes}
                ></Review>
            )
        })
    }
   
    render() { 
        if(this.state.reviews.length === 0){
            return (
                <div>
                    Loading.... reviews from fake rest api!!!!
                </div>
            )
        }else{
                return ( 
                <div>
                    {this.renderReviews()}
                </div>
            );
        }
        
    }
}
 
export default RemoteReview