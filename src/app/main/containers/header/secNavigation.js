
"use strict"

import React, { Proptypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {Link} from 'react-router';

import { actionChangeContent } from '../../actions/contentAction';

const SplitButton = require('react-bootstrap/lib/SplitButton');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const Button = require('react-bootstrap/lib/Button');

class SecHeader extends React.Component {
    
    monitorState(state, actionChangeContent) {
        let url = window.location.href;
        if ( url ) {
            url = url.split('#');
            if (url[1] && url[1] === '/') {
                if (state != 'Dashboard') {
                    actionChangeContent("Dashboard");
                }
            }
            else if (url[1] && url[1] === '/campaigns') {
                if (state != 'Campaigns') {
                    actionChangeContent("Campaigns");
                }
            }
            else if (url[1] && url[1] === '/createad') {
                if (state != 'Create Ad') {
                    actionChangeContent("Create Ad");
                }
            }
            else if (url[1] && url[1] === '/getimpression') {
                if (state != 'Get Impression') {
                    actionChangeContent("Get Impression");
                }
            }
        }
        return state;
    }
    
    render () {

        let { actionChangeContent, manager } = this.props;
        console.log(window.location.href, manager.state);
        
        let state = this.monitorState(manager.state, actionChangeContent);
        
        return (
            <div class="row col-lg-12 col-md-12 col-sm-12"
                style={{
                    padding: '5px 0px 5px 0px', 
                    margin: 0, 
                    width: '100%',
                    backgroundColor: '#FFF',
                    borderBottom: '1px solid #d3d3d3'
                }}>
                <div class="col-lg-2 col-md-2 col-sm-12"/>
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div style={{float: 'left'}}>
                        <SplitButton bsStyle="default" bsSize="small" title={state} id="split-button-pull-left">
                            <MenuItem 
                                eventKey="1" 
                                href="#/" 
                                onClick={()=>actionChangeContent("Dashboard")}>
                                Dashboard
                            </MenuItem>
                            <MenuItem 
                                eventKey="2" 
                                href="#/campaigns"
                                onClick={()=>actionChangeContent("Campaigns")}>
                                Campaigns
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem 
                                eventKey="4" 
                                onClick={()=>actionChangeContent("Create Ad")}
                                href="#/createad">
                                Create Ad
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem 
                                eventKey="4"
                                onClick={()=>actionChangeContent("Get Impression")} 
                                href="#/getimpression">
                                Get Impression
                            </MenuItem>
                        </SplitButton>
                    </div>
                    <div style={{float: 'right', margin: 0, padding: 0}}>
                        <Link to="createad">
                            <Button 
                                bsSize="small"
                                onClick={()=>actionChangeContent("Create Ad")} 
                                bsStyle="success">
                                Create Ad
                            </Button>
                        </Link>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12"/>
            </div>
        );
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
        actionChangeContent: actionChangeContent
    }, dispatch);
}

export default connect(mapStoreToProps, mapActionToProps)(SecHeader);