import React from 'react';
import Review from '../components/review';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu/menu';
import Content from '../components/content/content';

class RootComponent extends React.Component {
   
    render() { 
        return ( 
            <span style={{display:'flex', flexDirection:'column'}}>
                
                <Menu></Menu>
               
               
                <div>
                    <Header></Header>
                </div>
           
               
                <div>
                     <Content></Content>
                </div>
                <div>
                    <Footer></Footer>
                </div>
             </span>
         );
    }
}
 
export default RootComponent;