import React from 'react';

class User extends React.Component {
   
    render() { 
        return ( 
            <li>{this.props.name}</li>
         );
    }
}
 
export default User
