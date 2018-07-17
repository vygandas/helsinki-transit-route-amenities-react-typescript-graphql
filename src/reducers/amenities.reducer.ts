import { IAmenitiesState } from "../interfaces/IAmenitiesState";

export const initialState: IAmenitiesState = {
    search_input: "",
    autocomplete: null
};

export const amenities = (state: IAmenitiesState = initialState, action): IAmenitiesState => {
    switch (action.type) {
    default:
        return state;
    }
};
