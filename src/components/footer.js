import React from 'react';

class Footer extends React.Component {
  
    render() { 
        const footerStyle = {
            color:'red',
            backgroundColor:'lightpink',
            borderColor:'blue',
            borderSize:'1px',
            borderStyle:'solid'

        }

        return (  
            <div style={footerStyle}>
                <h1>Review Footer</h1>
            </div>
        );
    }
}
 
export default Footer;