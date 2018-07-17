import { IAmenitiesState } from "../interfaces/IAmenitiesState";

export const initialState: IAmenitiesState = {
};

export const amenities = (state: IAmenitiesState = initialState, action): IAmenitiesState => {
    switch (action.type) {
    default:
        return state;
    }
};
