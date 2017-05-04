

"use strict"

import React from 'react';


import _scss from '../../../scss/main/content/content';

import DashboardContent from './dashboard_content/dashboard_content';

class Content extends React.Component {
    render () {
        return (
            <div class={_scss.mainContent}>
                <DashboardContent />
            </div>
        );
    }
}

export default Content;