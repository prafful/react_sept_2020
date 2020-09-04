import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Contact from '../contact';
import Review from '../review';
import ReviewForm from '../reviewform';
import AllReview from '../allreview';
import Users from '../remote/users';
import RemoteReview from '../remote/remotereviews';


class Content extends React.Component {
    
    render() { 
        return (  
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/review' component={AllReview}></Route>
                <Route path='/add' component={ReviewForm}></Route>
                <Route path='/users' component={Users}></Route>
                <Route path='/allreviews' component={RemoteReview}></Route>
            </Switch>
        );
    }
}
 
export default Content;