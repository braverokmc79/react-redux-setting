import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types';

export const addSubscriber = () => {
    console.log("1.action - addSubscriber:");
    return {
        type: ADD_SUBSCRIBER
    }
}

export const removeSubscriber = () => {
    console.log("1.action - removeSubscriber:");
    return {
        type: REMOVE_SUBSCRIBER
    }
}

