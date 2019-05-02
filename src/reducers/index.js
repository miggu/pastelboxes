import { combineReducers } from 'redux';


import {    FETCH_STORY_REFS ,
            FETCH_STORY,
            TOGGLE_LOADING,
            SEARCH_BY_TERM 
} from '../actions/types' ;


// Borrar en cuanto se pueda

const storyRefsReducer =  ( state = [], action ) => {
    switch (action.type) {
        case FETCH_STORY_REFS: 
            //this should never happen more than once , no need for mutation
            return  action.payload 
        default :
            return state;
    }

}

const shownStoriesReducer = (state = [] , action) => {
    switch (action.type) {
        case FETCH_STORY:
            return [ ...state, action.payload ]
        default:
            return state;
    }

}

const searchTermReducer = ( state = '', action) => {
    switch (action.type) {
        case SEARCH_BY_TERM:
            return action.payload;
        default:
            return state;
    }
}



const activateLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return !state;
        default:
            return state;
    }
}



export default combineReducers({
    storyRefs : storyRefsReducer ,
    shownStories: shownStoriesReducer ,
    searchTerm: searchTermReducer,
    isLoading: activateLoadingReducer
} )

