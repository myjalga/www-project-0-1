

"use strict"

import React, { PropTypes } from 'react';

import AppBar from 'react-toolbox/lib/app_bar';

import SecHeader from './secNavigation';

import _scss from '../../scss/main/header/header';

const _popover = {
    position: 'absolute',
    zIndex: '2',
    top: 30
}

const _cover = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
}

const DropdownButton = require('react-bootstrap/lib/DropdownButton');
const MenuItem = require('react-bootstrap/lib/MenuItem');


class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            showAcc: false
        }
    }

    handleLogout(){
        window.location = "/adnalytics/logout"
    }

    navigate(to) {
        console.log(this.props);
        this.props.history.pushState(null, `/${to}`);
    }

    render () {
        return (
            <div class={_scss.mainHeaderContainer}>
                <header class={_scss.mainHeaderClass}>
                    <div class="row" style={{margin: 0, padding: 0}}>
                        <div style={{float: 'left'}}>
                            <h1 class={_scss.mainHeaderName}>
                                <span>
                                    <i class="glyphicon glyphicon-menu-hamburger" 
                                        style={{marginRight: '10px'}}/>
                                </span>
                                <strong>Adnalytics Manager</strong>
                            </h1>
                        </div>
                        <div style={{float: 'right'}}>
                            <DropdownButton bsSize="small" bsStyle="success" title="Joenil" id="dropdown-id-acc" pullRight>
                                <MenuItem eventKey="1" onClick={this.navigate.bind(this, "account_settings")}>
                                    Account Setting
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="2" onClick={this.handleLogout.bind(this)}>
                                    <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
                                </MenuItem>
                            </DropdownButton>
                        </div>
                    </div>
                </header>
                <SecHeader {...this.props}/>
            </div>
        );
    }
}

export default Header;