import React from 'react';

class Body extends React.Component {
   
    render() { 
        return ( 
            <span>
                {this.props.desc}
            </span>
         );
    }
}
 
export default Body;