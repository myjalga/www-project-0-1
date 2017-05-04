

"use strict"

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { actionCampaignForm } from '../../actions/campaignAction';

import Input from 'react-toolbox/lib/input';
import { Card } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';
import Checkbox from 'react-toolbox/lib/checkbox';
import { Snackbar } from 'react-toolbox';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';

import _scss from '../../scss/main/create_ad/basic_info.scss';


const countries = [
    { value: 'ALL', label: 'Worldwide' },
    { value: 'PH', label: 'Philippines' },
    { value: 'SG', label: 'Singapore' },
    { value: 'IN', label: 'India' },
];

/**
 * @description This will indicating a load progress 
 * @param {*} self 
 */
const load = (self) => {
    return (
        <div style={{textAlign: 'center'}}>
            <ProgressBar type="circular" mode="indeterminate" />
        </div>
    );
}

/**
 * @description basic form
 */
const basic = (self) => {
    return (
        <div>
            <Input 
                type='text' 
                label='Campaign Name' 
                name='name' 
                value={self.state.adname}
                onChange={self.handleInputChange.bind(self, 'adname')}/>
            <Input 
                type='number' 
                label='Campaign Impression' 
                name='impression'
                value={self.state.impression}
                onChange={self.handleInputChange.bind(self, 'impression')} />
            <Dropdown
                auto
                onChange={self.handleCountryChange.bind(self)}
                source={countries}
                value={self.state.country}/>
            <Input 
                type='text' 
                label='Description' 
                name='description'
                value={self.state.description}
                multiline={true}
                onChange={self.handleInputChange.bind(self, 'description')} />
            <div class="col-lg-12 col-md-12 col-sm-12" style={{textAlign: 'center', margin: 0, padding: 0}}>
                <Button 
                    onClick={self.handleNextButton.bind(self)}
                    class={_scss.basicInfoButtonPrimary} 
                    label='Next' raised primary />
            </div>
        </div>
    );
}

/**
 * @description HTML elemen
 * {(!self.state.load) ? basic(self) : load(self)}
 */
const getHtml = (self) => {
    return (
        <div>
            <Card style={{width: '100%', padding: '20px'}}>
                {(!self.state.load) ? basic(self) : load(self)}
            </Card>
            <Snackbar 
                action="Dismiss"
                label="Please fill-up the fields"
                onClick={()=>{}}
                timeout={3000}
                type="accept"
                active={self.state.active}
                onClick={()=>self.setState({active: false})}
                onTimeout={()=>self.setState({active: false})}
                />
        </div>
    );
}


class BasicInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            adname: '',
            impression: '',
            description: '',
            country: 'ALL',
            active: false,
            load: true
        }
    }

    /**
     * @description handle input on change
     * @param {String} attr attributes
     * @param {String} value String value
     */
    handleInputChange(attr, value) {
        this.setState({[attr]: value});
    }

    /**
     * @description Handle next input
     */
    handleNextButton() {
        let { actionCampaignForm } =  this.props;
        let {
            adname,
            impression,
            description
        } = this.state;

        if (adname != '' && impression != '') {
            actionCampaignForm({
                attr: 'basicInfo',
                createState: 'CreateBanner',
                values: {
                    campaignName: adname,
                    impression: Number(impression),
                    description: description
                }
            });
        } else {
            this.setState({active: true});
        }
    }

    handleCountryChange(value) {
        this.setState({country: value});
    }

    componentDidMount(){
        setTimeout(function(){
            this.setState({load: false});
        }.bind(this), 2000);
    }

    render () {
        return getHtml(this);
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
 * @description map actions to class props
 */
const mapActionToProps = (dispatch) => {
    return bindActionCreators({
        actionCampaignForm: actionCampaignForm
    }, dispatch);
}
export default connect(mapStoreToProps, mapActionToProps)(BasicInfo);