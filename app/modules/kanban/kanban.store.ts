import * as Immutable from "immutable"

export const kanbanInitialState = {
}

export const kanbanReducer = (state, action) => {
    return state
    // switch(action.type){
    //     case 'SET_MOST_LIKED':
    //         return state.set('most-liked', action.payload);
    //     case 'SET_MOST_ACTIVE':
    //         return state.set('most-active', action.payload);
    //     case 'SET_FEATURED_PROJECTS':
    //         return state.set('featured', action.payload);
    //     case 'SET_PROJECTS_STATS':
    //         return state.set('projects-count', action.payload);
    //     case 'APPEND_DISCOVER_SEARCH_RESULTS':
    //         return state.update('search-results', (projects) => projects.concat(action.payload));
    //     case 'UPDATE_DISCOVER_SEARCH_NEXT_PAGE':
    //         return state.update('results-next-page', (value) => {
    //             if(action.payload) {
    //                 return value + 1;
    //             }
    //             return null;
    //         });
    //     default:
    //         return state;
    // }
};