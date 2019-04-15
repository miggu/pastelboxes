import api from '../api';


import {
    FETCH_STORY_REFS,
    FETCH_STORY,
    TOGGLE_LOADING,
    SEARCH_BY_TERM
} from './types';


export const fetchRefs = () => async (dispatch) => {
    const response = await api.get('/beststories.json'); 
    dispatch({ type: FETCH_STORY_REFS, payload: response.data  } )
}


export const fetchStory = (ref) => async (dispatch) => {
    const response = await api.get(`item/${ref}.json`);

    dispatch({ type: FETCH_STORY, payload : response.data })
}


export const toggleLoading = () =>  {
    return {
        type: TOGGLE_LOADING
    }
}

export const searchTermInput = (term) => {
    return {
        type: SEARCH_BY_TERM,
        payload: term
    }
}