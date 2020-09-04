import React from 'react';
import axios from "axios";
import Review from './review';

class RemoteReview extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            reviews:[],
            myid:10
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

    deleteReviewById=(id)=>{
        console.log('Delete review with id (in parent): ' + id );
        axios.delete('http://localhost:3000/reviews/'+id)
                .then(response=>{
                    console.log(response);
                    console.log("deleted successfully~");
                    this.loadAllReview()
                })
                .catch(err=>{
                    console.log(err);
                })
    }

    editReviewById=(id)=>{
        console.log('Edit review with id (in parent): ' + id );
        //this.setState({myid: id})
        this.props.history.push({
            pathname:'/editreview',
            state: {myid:id}
        })
    }

    renderReviews=()=>{
        return this.state.reviews.map(r=>{
            return (
                <Review key={r.id} 
                        id={r.id}
                        title={r.title}
                        desc={r.description}
                        likes={r.likes}
                        deleteReviewProp = {this.deleteReviewById}
                        editReviewProp = { this.editReviewById}
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