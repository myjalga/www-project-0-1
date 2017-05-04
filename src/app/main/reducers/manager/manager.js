

"use strict"


import { actionHandler } from './handler/handler';


let _manager = {
    state: 'Dashboard',
    campaign: {
        createState: 'BasicInfo'
    }
}

/**
 * @description Handle redux data
 */
export default (state=_manager, action) => {
    let fn = actionHandler[action.type];
    if ( fn ) {
        state = fn(state, action.payload);
    }
    return state;
}