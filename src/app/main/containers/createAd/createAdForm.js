

"use strict"

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import DatePicker from 'react-toolbox/lib/date_picker';

import {Button} from 'react-toolbox/lib/button';

import _scss from '../../scss/main/create_ad/bannerCreate';
import _scssBtn from '../../scss/main/create_ad/basic_info.scss';

const _ = require('lodash');

let datetime = new Date();


const _countries = [
    {label: 'Worldwide', value: 'WW'},
    {label: 'Singapore (SG)', value: 'SG'},
    {label: 'Philippines (PH)', value: 'PH'},
    {label: 'India (IN)', value: 'IN'}
]

const _media = [
    {label: 'Image/Banner', value: 'image'},
    {label: 'Video', value: 'video'}
]

const _bannerSizes = [
    {label: '800 x 210', value: '800x210', width: 800, height: 210},
    {label: '800 x 110', value: '800x110', width: 800, height: 110}
];

const _priority = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
];

let cornerStyle = {
    padding: 0,
    margin: 0
}



const bannerImage = (self) => {

    let previewStyle = null;
    let size = self.state.size;
    let bSize = _.find(_bannerSizes, {value: size});

    previewStyle = {
        width: bSize.width,
        height: bSize.height + 6,
        textAlign: 'center',
        margin: 'auto',
        border: '4px solid #d3d3d3'
    }
    return (
        <div style={{
            padding: '10px 0px 0px 0px',
            borderTop: '1px solid #d3d3d3'
        }}>

            <div style={{
                textAlign: 'center',
                padding: '20px'
            }}>
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
            </div>
            <div style={{
                padding: '10px',
                textAlign: 'center'
            }}>
                <h6 style={{color: '#C0C0C0'}}>Preview</h6>
                <div style={previewStyle}>
                    {(self.state.imagePreviewUrl) ? <img id="id-campaign-banner" style={{width: '100%'}} src={self.state.imagePreviewUrl} /> : null}
                </div>
            </div>
        </div>
    );
};

const videoMedia = (self) => {
    return (
        <div style={{
            padding: '10px 0px 0px 0px',
            borderTop: '1px solid #d3d3d3'
        }}>
            <div>
                <Input 
                    type="text"
                    label="Video URL here"
                    name="video"
                    value={self.state.vidUrl}
                    onChange={(value)=>self.setState({vidUrl: value})}
                    />
            </div>
            <div style={{textAlign: 'center'}}>
                <label>Preview</label>
                <div style={{
                    border: '4px solid #d3d3d3', 
                    width: 428, 
                    height: 323,
                    margin: 'auto'
                }}>
                    <iframe width="420" height="315"
                        src={self.state.vidUrl} frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
}

const getHtml = (self) => {
    return (
        <div class="row" style={{padding: '10px', margin: 0}}>
            <div 
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label>Basic Information</label>
                <Input 
                    type="text" 
                    label="Campaign Name" 
                    name="name"
                    value={self.state.campaignName}
                    onChange={self.handleChange.bind(self, 'campaignName')}/>
                <Input 
                    type="text" 
                    label="Description" 
                    name="description"
                    multiline={true}
                    value={self.state.description}
                    onChange={self.handleChange.bind(self, 'description')}/>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label>Campaign Settings</label>
                <div
                    class="row col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    style={cornerStyle}>
                    <div 
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                        style={{...cornerStyle, padding: '0px 10px 0px 0px'}}>
                        <DatePicker
                            label='Start Date'
                            onChange={self.handleDateChange.bind(self, 'startDate')}
                            value={self.state.startDate}
                            sundayFirstDayOfWeek />
                    </div>
                    <div 
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                        style={cornerStyle}>
                        <DatePicker
                            label='End Date'
                            onChange={self.handleDateChange.bind(self, 'endDate')}
                            value={self.state.endDate}
                            sundayFirstDayOfWeek />
                    </div>
                </div>
                <div 
                    class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    style={cornerStyle}>
                    <Input 
                        type="number" 
                        label="Impression" 
                        name="impression"
                        value={self.state.impression}
                        onChange={self.handleChange.bind(self, 'impression')}/>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <label style={{color: '#C0C0C0', fontSize: '12px'}}>Priority</label>
                    <Dropdown
                        auto
                        onChange={self.handlePrioChange.bind(self)}
                        source={_priority}
                        value={self.state.priority} />
                </div>
                <div style={{paddingTop: '10px'}}>
                    <label style={{color: '#C0C0C0', fontSize: '12px'}}>Target</label>
                    <Dropdown
                        auto
                        onChange={self.handleCountryChange.bind(self)}
                        source={_countries}
                        value={self.state.country} />
                </div>
                <div 
                    class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    style={cornerStyle}>
                    <Input 
                        type="text" 
                        label="Click-through URL" 
                        name="target"
                        value={self.state.impression}
                        onChange={self.handleChange.bind(self, 'impression')}/>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <label style={{color: '#C0C0C0', fontSize: '12px'}}>Size</label>
                    <Dropdown
                        auto
                        onChange={self.handleSizeChange.bind(self)}
                        source={_bannerSizes}
                        value={self.state.size} />
                </div>
                <div style={{paddingTop: '10px'}}>
                    <label style={{color: '#C0C0C0', fontSize: '12px'}}>Media</label>
                    <Dropdown
                        auto
                        onChange={self.handleChange.bind(self, 'media')}
                        source={_media}
                        value={self.state.media} />
                </div>
                {(self.state.media === 'image') ? bannerImage(self) : videoMedia(self)}
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <Button 
                        onClick={self.handleCreateCampaign.bind(self)}
                        class={_scssBtn.basicInfoButtonPrimary} 
                        label='Create' raised primary />
                </div>
            </div>
        </div>
    );
}

/**
 * @class CreateAdForm
 */
class CreateAdForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
            campaignName: '',
            description: '',
            size: '800x210',
            startDate: '',
            endDate: '',
            impression: '',
            priority: '1',
            country: 'WW',
            clckUrl: '',
            media: 'image',
            file: '',
            imagePreviewUrl: '',
            vidUrl: ''
        }
    }

    handleImageChange(e) {
        e.preventDefault();
        if (!e.target.files[0]) {return;}

        let reader = new FileReader();
        let file = e.target.files[0];
        let imagePreview = null;

        reader.onloadend = () => {
            imagePreview = reader.result;
            let image = new Image();

            image.onload = () => {
                let size = _.find(_bannerSizes, {value: this.state.size});
                if ((image.height <= size.height && image.height >= (size.height - 10))
                    && (image.width <= size.width && image.width >= (size.width - 10))) {
                        this.setState({
                            file: file,
                            imagePreviewUrl: imagePreview
                        });
                }
            }
            image.src = imagePreview;
        }
        reader.readAsDataURL(file);
    }

    handleChange(name, value) {
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleCountryChange(country) {
        this.setState({country: country});
    }

    handlePrioChange(prio) {
        this.setState({priority: prio});
    }

    handleSizeChange(size) {
        this.setState({size: size});
    } 

    handleDateChange(name, value) {
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleCreateCampaign () {

    }

    render () {
        return getHtml(this);
    }
}

/**
 * @description Map store to props
 */
const mapStoreProps = (store) => {
    return {};
}

/**
 * @description Map action to props
 */
const mapActionToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStoreProps, mapActionToProps)(CreateAdForm);