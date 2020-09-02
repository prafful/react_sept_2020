import React from 'react';
import Title from './title';
import Body from './body';
import Actions from './actions';


class Review extends React.Component {
  
    render() { 

        const reviewStyle={
                        border:'1px dashed red', 
                        padding:'5px', 
                        margin:'10px'
                    }

        return ( 
            <div style={reviewStyle}>
                Review component will come here!!!
                <ol>
                    <li>
                        <Title thistitle={this.props.mytitle}></Title>
                    </li>
                    <li><Body desc={this.props.desc}></Body></li>
                    <li><Actions>{this.props.children}</Actions></li>
                </ol>
            </div>
         );
    }
}
 
export default Review;