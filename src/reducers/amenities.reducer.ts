import { IAmenitiesState } from "../interfaces/IAmenitiesState";

export const initialState: IAmenitiesState = {
    search_input: ""
};

export const amenities = (state: IAmenitiesState = initialState, action): IAmenitiesState => {
    switch (action.type) {
    default:
        return state;
    }
};
