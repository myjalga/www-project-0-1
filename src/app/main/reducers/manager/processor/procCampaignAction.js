


"use strict"

/**
 * @description Process the action with payload
 */
export const procCampaignForm = (state, payload) => {
    if (state.campaign) {
        state.campaign.createState = payload.createState;
        state.campaign[payload.attr] = {...payload.values};
    } else {
        state.campaign = {
            createState: payload.createState,
            [payload.attr]: {...payload.values}
        };
    }
}


/**
 * @description Process the switching of campaign form content
 */
export const procSwitchCampaignForm = (state, payload) => {
    state.campaign.createState = payload;
}