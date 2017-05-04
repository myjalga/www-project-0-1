

"use strict"

/**
 * @description Fires an action to change content indicator
 * @param {String} state
 */
export const actionChangeContent = (state) => {
    return {
        type: 'ACTION_CONTENT_ONCHANGE',
        payload: state
    }
}