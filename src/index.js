import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from "./rootcomponent/rootcomponent";
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <RootComponent></RootComponent>
    </HashRouter>
    , 
    
    document.getElementById('root') )