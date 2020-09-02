import React from 'react';

class Header extends React.Component {
  
    render() { 
        const headerStyle = {
            color:'red',
            backgroundColor:'pink',
            borderColor:'blue',
            borderSize:'1px',
            borderStyle:'solid'

        }

        return (  
            <div style={headerStyle}>
                <h1>Review Header</h1>
            </div>
        );
    }
}
 
export default Header;