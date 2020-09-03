import React from 'react';

import Review from "./review";



class AllReview extends React.Component {
    
    render() { 
        return (
             <div style={{backgroundColor:"lightsalmon", display:'flex', flexWrap:'wrap'}}>
                  <Review mytitle='Note 20' desc='Just launched by Samsung!'>10</Review>
                  <Review mytitle='One X' desc='Premium from One!'>20</Review>
                  <Review mytitle='LG Dual Screen' desc='Get more from one!'>5</Review>
                  <Review mytitle='Note 10' desc='The old gaurd!!!!'>15</Review>
                </div>
          );
    }
}
 
export default AllReview