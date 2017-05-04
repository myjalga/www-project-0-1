

"use strict"

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BasicInfo from './basicInfo';

import Media from './media';

import CreateAdForm from './createAdForm';

/**
 * @description Render the Front HTML
 */
const getRender = (self) => {

    let { manager } = self.props;

    let content = <BasicInfo />
    if (manager.campaign && manager.campaign.createState === 'CreateBanner') {
        content = <Media />
    }   

    return (
        <div class="row col-lg-12 col-md-12 col-sm-12" style={{width: '100%', margin: 0, padding: 0}}>
            <div class="col-lg-12 col-md-12 col-sm-12" style={{textAlign: 'center', padding: '10px', margin: 0}}>
                <h4 style={{color: '#585a5e'}}><strong>Create Campaign</strong></h4>
            </div>
            <div style={{width: '900px', margin: 'auto'}} >
                <CreateAdForm />
            </div>
        </div>
    );
}

/**
 * @class CreateAd
 */
class CreateAd extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render () {
        return getRender(this);
    }
}

/**
 * @description map store to class props
 */
const mapStoreToProps = (store) => {
    return {
        manager: store.manager
    }
}

/**
 * @description map action to class props
 */
const mapActionToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStoreToProps, mapActionToProps)(CreateAd);