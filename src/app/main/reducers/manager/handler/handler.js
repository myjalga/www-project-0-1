

"use strict"


import { 
    procCampaignForm,
    procSwitchCampaignForm 
} from '../processor/procCampaignAction';

import { procContentState } from '../processor/procContentAction';

export const actionHandler = [];

/**
 * @description Catch the action ACTION_CAMPAIGN_FORM
 */
actionHandler["ACTION_CAMPAIGN_FORM"] = (state, payload) => {
    state = {...state};
    procCampaignForm(state, payload);
    return state;
}

/**
 * @description Handle on change content state
 */
actionHandler["ACTION_CONTENT_ONCHANGE"] = (state, payload) => {
    state = {...state};
    procContentState(state, payload);
    return state;
}

/**
 * @description Handle the action switching the campaign for content
 */
actionHandler['ACTION_SWITCH_CAMPAIGN_FORM'] = (state, payload) => {
    state = {...state};
    procSwitchCampaignForm(state, payload);
    return state;
}