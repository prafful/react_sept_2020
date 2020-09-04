import React from 'react';
import { Link } from 'react-router-dom'
import mystyles from  './menu.module.css'

class Menu extends React.Component {
    
    render() { 
        return ( 
            <div className={mystyles.menustyle}>
                <Link to='/' className={mystyles.menuitem}>Home</Link>
                &nbsp;
                <Link to='/about' className={mystyles.menuitem}>About</Link>
                &nbsp;
                <Link to='/contact' className={mystyles.menuitem}>Contact</Link>
                &nbsp;
                <Link to='/review' className={mystyles.menuitem}>Static Review</Link>
                &nbsp;
                <Link to='/add' className={mystyles.menuitem}>Add Review</Link>
                &nbsp;
                <Link to='/users' className={mystyles.menuitem}>Users</Link>
                &nbsp;
                <Link to='/allreviews' className={mystyles.menuitem}>All Reviews</Link>
            </div>
         );
    }
}
 
export default Menu