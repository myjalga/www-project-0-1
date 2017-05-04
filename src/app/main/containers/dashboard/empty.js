

"use strict"

import React from 'react';

const style = {
    textAlign: 'center',
    padding: '50px'
}

const h4 = {
    color: '#585a5e',
    fontWeight: 900
}

const p = {
    color: '#7e7f82',
    margin: '5px 0px 10px 0px'
}

class Empty extends React.Component {
    render () {
        return (
            <div class="col-lg-12 col-md-12 col-sm-12" style={style}>
                <h4 style={h4}><strong>No Results Found</strong></h4>
                <p style={p}>Create Ad / Campaign by clicking the button below</p>
                <button type="button" class="btn btn-default">Create Ad</button>
            </div>
        );
    }
}

export default Empty;