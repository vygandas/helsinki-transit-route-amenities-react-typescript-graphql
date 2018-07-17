import { IAmenitiesState } from "../interfaces/IAmenitiesState";
import {GET_AUTO_COMPLETE_SUGGESTIONS_LIST, CLEAR_AUTO_COMPLETE_SUGGESTIONS_LIST, SET_SELECTED_ADDRESS} from "../actions/types";

export const initialState: IAmenitiesState = {
    selected: null,
    autocomplete: null
};

export const amenities = (state: IAmenitiesState = initialState, action): IAmenitiesState => {
    switch (action.type) {
    case GET_AUTO_COMPLETE_SUGGESTIONS_LIST:
        return <IAmenitiesState>{...state, ...{autocomplete: action.payload}}
    case CLEAR_AUTO_COMPLETE_SUGGESTIONS_LIST:
        return <IAmenitiesState>{...state, ...{autocomplete: action.payload}}
    case SET_SELECTED_ADDRESS:
        return <IAmenitiesState>{...state, ...{selected: action.payload}}
    default:
        return state;
    }
};
