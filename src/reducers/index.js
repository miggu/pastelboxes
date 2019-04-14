import { combineReducers } from 'redux';


import {    FETCH_STORY_REFS ,
            FETCH_STORY,
            ACTIVATE_LOADING,
            SEARCH_BY_TERM 
} from '../actions/types' ;




const storyRefsReducer =  ( state = {}, action ) => {
    switch (action.type) {
        case FETCH_STORY_REFS: 
            return { ...state, [action.payload.id]: action.payload }
        default :
            return state;
    }

}

const shownStoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STORY:
            return { ...state, [action.payload.id]: action.payload }
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
        case ACTIVATE_LOADING:
            return action.payload;
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

