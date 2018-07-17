import {GET_AUTO_COMPLETE_SUGGESTIONS_LIST, SHOW_ERROR, CLEAR_AUTO_COMPLETE_SUGGESTIONS_LIST} from "./types";
import axios from "axios";
import {API_AUTO_COMPLETE_URL} from "../config/api.config";
import {stringify} from "querystring";
import {AxiosPromise} from "axios";
import {IAutoCompleteResponse} from "../interfaces/IAutoCompleteResponse";
import {TAutoCompleteFeature} from "../types/TAutoCompleteFeature";

export const getStreetSuggestions = (text: string) => {
    return dispatch => {
        axios.get(`${API_AUTO_COMPLETE_URL}&${stringify({ text })}`)
            .then(response => dispatch({
                type: GET_AUTO_COMPLETE_SUGGESTIONS_LIST,
                payload: <IAutoCompleteResponse<TAutoCompleteFeature>>response.data
            }))
            .catch(error => dispatch({
                type: SHOW_ERROR,
                payload: error.response.data.message
            }));
    };
}

export const clearStreetSuggestions = () => dispatch => dispatch({
    type: CLEAR_AUTO_COMPLETE_SUGGESTIONS_LIST,
    payload: null
});
