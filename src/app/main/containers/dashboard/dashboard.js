
"use strict"

import React, { PropTypes } from 'react';

// Header
import Header from './header/header';

// Left Navigation
import LeftNavigation from './left_navigation/left_navigation';

// Content
import Content from './content/content';

// Empty 
import Empty from './empty';

// Create Ad
import CreateAd from './content/create_ad/create_ad';

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            showDrawer: false
        }
    }

    render () {
        return (
            <div style={{height: '100%', width: '100%', position: 'absolute'}}>
                <Header />
                <div class="col-lg-12 col-md-12 col-sm-12" style={{width: '100%', height: '100%',  padding: 0, margin: '100px 0px 0px 0px'}}>
                    <CreateAd />   
                </div>
            </div>
        );
    }
}



export default Dashboard;