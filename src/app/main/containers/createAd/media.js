

"use strict"

import React, { Proptypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card } from 'react-toolbox/lib/card';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';
import { Dropdown } from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';


import _scss from '../../scss/main/create_ad/bannerCreate';
import _btn from '../../scss/main/create_ad/basic_info';

import Banner from './banner';
import Video from './video';

import {
    actionCampaignForm,
    actionSwitchCampaignForm
} from '../../actions/campaignAction';

const _media = [
    {value: 'banner', label: 'Banner'},
    {value: 'video', label: 'Video'}
];

const load = (self) => {
    return (
        <div style={{textAlign: 'center'}}>
            <ProgressBar type="circular" mode="indeterminate" />
        </div>
    );
}

const media = (self) => {

    return (
        <div>
            <section>
                <label>Media Type:</label>
                <div>
                    <Dropdown 
                        auto
                        onChange={(value)=>self.setState({media: value})}
                        source={_media}
                        value={self.state.media}
                        />
                </div>
                {(self.state.media === 'banner') ? <Banner /> : <Video />}
                <div style={{
                    margin: 0,
                    padding: '10px 0px 10px  0px',
                    width: '100%',
                    borderTop: '1px solid #d3d3d3'}}>
                    <div
                        style={{
                            padding: '0px 5px 0px 0px', 
                            margin: 0}} 
                        class="col-lg-6 col-md-6 col-sm-6">
                        <Button
                            onClick={()=>self.handlePreviousButton()}
                            class={_btn.basicInfoButtonPrimary} 
                            label='Previous' raised primary />
                    </div>
                    <div
                        style={{
                            padding: '0px 0px 0px 5px', 
                            margin: 0}} 
                        class="col-lg-6 col-md-6 col-sm-6">
                        <Button
                            class={_btn.basicInfoButtonPrimary} 
                            label='Next' raised primary />
                    </div>
                </div>
            </section>
        </div>
    );
}




const getRender = (self) => {
    return (
        <div>
            <Card style={{width: '100%', padding: '20px'}}>
                {(self.state.load) ? load(self) : media(self)}
            </Card>
        </div>
    );
}


class Media extends React.Component {
    
    constructor() {
        super();
        this.state = {
            load: true,
            bannerSize: '',
            file: '',
            media: 'banner'
        };
    }

    /**
     * @description handle switching of campaign form previous
     */
    handlePreviousButton () {
        let {
            actionSwitchCampaignForm
        } = this.props;

        actionSwitchCampaignForm("BasicInfo");
    }   

    componentDidMount() {
        setTimeout(function () {
            this.setState({load: false});
        }.bind(this), 2000);
    }

    render () {
        return getRender(this);
    }
}


/**
 * @description Map store to class props
 */
const mapStoreToProps = (store) => {
    return {
        manager: store.manager
    }
}

/**
 * @description Map action to class props
 */
const mapActionToProps = (dispatch) => {
    return bindActionCreators({
        actionCampaignForm: actionCampaignForm,
        actionSwitchCampaignForm: actionSwitchCampaignForm
    }, dispatch);
}

export default connect(mapStoreToProps, mapActionToProps)(Media);