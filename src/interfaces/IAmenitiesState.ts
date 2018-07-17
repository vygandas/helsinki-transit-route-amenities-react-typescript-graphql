import {TAutoCompleteFeature} from "../types/TAutoCompleteFeature";
import {IAutoCompleteResponse} from "./IAutoCompleteResponse";
import { ISelectedAddress } from "./ISelectedAddress";

export interface IAmenitiesState {
    selected: ISelectedAddress;
    autocomplete?: IAutoCompleteResponse<TAutoCompleteFeature>
}
