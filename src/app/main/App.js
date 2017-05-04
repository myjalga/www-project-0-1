

"use strict"

import React, { PropTypes } from 'react';

import Header from './containers/header/header';

const bodStyle = {
    height: '100%', 
    width: '100%', 
    position: 'absolute'
};

const contentStyle = {
    width: '100%',  
    padding: 0, 
    height: '100%',
    margin: '100px 0px 0px 0px'
};


class App extends React.Component {
    render () {
        return (
            <div style={bodStyle}>
                <Header {...this.props}/>
                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;