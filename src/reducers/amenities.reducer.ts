import { IAmenitiesState } from "../interfaces/IAmenitiesState";
import {GET_AUTO_COMPLETE_SUGGESTIONS_LIST, CLEAR_AUTO_COMPLETE_SUGGESTIONS_LIST} from "../actions/types";

export const initialState: IAmenitiesState = {
    search_input: "",
    autocomplete: null
};

export const amenities = (state: IAmenitiesState = initialState, action): IAmenitiesState => {
    switch (action.type) {
    case GET_AUTO_COMPLETE_SUGGESTIONS_LIST:
        return <IAmenitiesState>{...state, ...{autocomplete: action.payload}}
    case CLEAR_AUTO_COMPLETE_SUGGESTIONS_LIST:
        return <IAmenitiesState>{...state, ...{autocomplete: action.payload}}
    default:
        return state;
    }
};
