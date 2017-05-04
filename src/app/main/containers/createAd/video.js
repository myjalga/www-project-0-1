

"use strict"

import React, { Proptypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import _btn from '../../scss/main/create_ad/basic_info';

import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';


// sample video https://www.youtube.com/embed/XGSy3_Czz8k?controls=0
const video = (self) => {

    let style = {borderTop: '1px solid #d3d3d3'}

    return (
        <div>
            <div style={style}>
                <Input 
                    type="text"
                    label="Video URL here"
                    name="video"
                    value={self.state.url}
                    onChange={(value)=>self.setState({url: value})}
                    />
            </div>
            <div style={{...style, textAlign: 'center'}}>
                <label>Preview</label>
                <div>
                    <iframe width="300" height="300"
                        src={self.state.url}>
                    </iframe>
                </div>
            </div>
        </div>
    );
}

class Video extends React.Component {
    
    constructor() {
        super();
        this.state = {
            url: ''
        };
    }

    render () {
        return video(this);
    }
}

export default Video;