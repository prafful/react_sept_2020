import React from 'react';

class Title extends React.Component {
   
    render() { 
        return ( 
            <span style={{color:'blue', fontWeight:'bold'}}>
                {this.props.thistitle}
            </span>
         );
    }
}
 
export default Title;