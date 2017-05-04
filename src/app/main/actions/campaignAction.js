


/**
 * @description Fires when call in Redux
 * @param {Object} value JSON object
 */
export const actionCampaignForm = (value) => {
    return {
        type: 'ACTION_CAMPAIGN_FORM',
        payload: value
    }
}

/**
 * @description Switch content in Create Campaign
 */
export const actionSwitchCampaignForm = (content) => {
    return {
        type: 'ACTION_SWITCH_CAMPAIGN_FORM',
        payload: content
    };
};