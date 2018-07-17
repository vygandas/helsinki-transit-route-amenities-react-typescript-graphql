import {TAutoCompleteFeature} from "../types/TAutoCompleteFeature";
import {IAutoCompleteResponse} from "./IAutoCompleteResponse";

export interface IAmenitiesState {
    search_input: string;
    autocomplete?: IAutoCompleteResponse<TAutoCompleteFeature>
}
