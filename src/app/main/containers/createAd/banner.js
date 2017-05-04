

"use strict"

import React, { Proptypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    actionCampaignForm,
    actionSwitchCampaignForm
} from '../../actions/campaignAction';

import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import _scss from '../../scss/main/create_ad/bannerCreate';
import _btn from '../../scss/main/create_ad/basic_info';

const style = {
    margin: 0,
    padding: 0,
    width: '100%'
}

const labelStyle = {textAlign: 'center', padding: '10px', margin: 0};

const fileUpload = (self) => {
    return (
        <div>
            <input 
                type="file" 
                name="file-1[]" 
                id="file-1" 
                onChange={(e)=>self.handleImageChange(e)}
                class={`${_scss.inputFile} ${_scss.inputfile_1}`} 
                accept="image/x-png,image/gif,image/jpeg" />
            <label for="file-1">
                <svg 
                    width="20" 
                    height="17" 
                    viewBox="0 0 20 17">
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
                </svg> 
                <span>{`Choose a file`}&hellip;</span></label>
        </div>
    );
};


const banner = (self) => {

    let {
        actionCampaignForm,
        actionSwitchCampaignForm
    } = self.props;

    let previewStyle = {
        width: '800px',
        height: '210px',
        margin: 'auto',
        border: '2px solid #d3d3d3'
    }

    let { bannerSize } = self.state;

    if (bannerSize === '210x800') {
        previewStyle = {
            ...previewStyle,
            width: '210px',
            height: '800px'
        }
    }
    else if (bannerSize === '400x400') {
        previewStyle = {
            ...previewStyle,
            width: '400px',
            height: '400px'
        }
    }

    return (
        <div>
            <label>Banner Size</label>
            <div style={{marginTop: '10px'}}>
                <RadioGroup
                    name="comic"
                    value={self.state.bannerSize}
                    onChange={(e)=>self.handleChangeBannerSize(e)}>

                    <RadioButton label="800 x 210 ( Horizontal Rectangle )" value="800x210"/>
                    <RadioButton label="210 x 800 ( Vertical Rectangle )" value="210x800"/>
                    <RadioButton label="400 x 400 ( Square )" value="400x400"/>
                </RadioGroup>
            </div>
            <div style={{
                borderTop: '1px solid #d3d3d3',
                textAlign: 'center', 
                padding: '20px'}}>
                {fileUpload(self)}
            </div>

            <div style={{
                borderTop: '1px solid #d3d3d3',
                padding: '10px',
                textAlign: 'center'}}>
                <h6>Preview</h6>
                <div style={previewStyle}>
                    {(self.state.imagePreviewUrl) ? <img style={{width: '100%'}} src={self.state.imagePreviewUrl} /> : null}
                </div>

            </div>
            
            <div style={{
                borderTop: '1px solid #d3d3d3',
                textAlign: 'center'}}>

                <Input 
                    type="text"
                    label="Landing page URL here"
                    name="url"
                    value={self.state.landingUrl}
                    onChange={(value)=>self.setState({landingUrl: value})}
                    />
            
            </div>


        </div>
    );
}




class Banner extends React.Component {

    constructor(){
        super();
        this.state = {
            file: '',
            imagePreviewUrl: '',
            bannerSize: '',
            landingUrl: ''
        }
    }

    

    /**
     * @description Handle to next campaign form
     */
    handleNextButton () {
        let {
            actionCampaignForm,
            actionSwitchCampaignForm,
            manager
        } = self.props;
    }

    /**
     * @description Handle change banner size
     * @param {String} value banner size
     */
    handleChangeBannerSize(value) {
        this.setState({bannerSize: value});
    }

    /**
     * @description Handle Image Change
     */
    handleImageChange(e) {
        e.preventDefault();
        if (!e.target.files[0]) {return;}

        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render () {
        return banner(this);
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

export default connect(mapStoreToProps, mapActionToProps)(Banner);