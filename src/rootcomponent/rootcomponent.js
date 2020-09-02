import React from 'react';
import Review from '../components/review';
import Header from '../components/header';
import Footer from '../components/footer';
import ReviewForm from '../components/reviewform';

class RootComponent extends React.Component {
   
    render() { 
        return ( 
            <span style={{display:'flex', flexDirection:'column'}}>
                <div>
                    <Header></Header>
                </div>
              
                <div style={{backgroundColor:"lightsalmon", display:'flex', flexWrap:'wrap'}}>
                  <Review mytitle='Note 20' desc='Just launched by Samsung!'>10</Review>
                  <Review mytitle='One X' desc='Premium from One!'>20</Review>
                  <Review mytitle='LG Dual Screen' desc='Get more from one!'>5</Review>
                  <Review mytitle='Note 10' desc='The old gaurd!!!!'>15</Review>
                </div>
                <div style={{backgroundColor:"lightcoral"}}>
                    <ReviewForm></ReviewForm>
                </div>
                <div>
                    <Footer></Footer>
                </div>
             </span>
         );
    }
}
 
export default RootComponent;