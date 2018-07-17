import * as React from "react";
import {connect} from "react-redux";
import "./SearchForm.scss";
import { debounce } from "throttle-debounce";
import {getStreetSuggestions, clearStreetSuggestions} from "../../actions/search.actions";
import {IAutoCompleteResponse} from "../../interfaces/IAutoCompleteResponse";
import {TAutoCompleteFeature} from "../../types/TAutoCompleteFeature";
import {IAmenitiesState} from "../../interfaces/IAmenitiesState";
import {AutoCompleteComponent} from "../AutoComplete/index";

export interface SearchFormComponentProps {
    search_input: string;
    autocomplete?: IAutoCompleteResponse<TAutoCompleteFeature>
    getStreetSuggestions: typeof getStreetSuggestions;
    clearStreetSuggestions: typeof clearStreetSuggestions;
}

interface SearchFormComponentState {
}

class SearchFormComponent extends React.Component<SearchFormComponentProps, SearchFormComponentState> {
    private getAutoCompleteDebounced;
    constructor(props: SearchFormComponentProps) {
        super(props);
        this.getAutoCompleteDebounced = debounce(500, false, this.getAutoComplete);
    }
    getAutoComplete(text: string): void {
        console.log("text", text);
        console.log("SearchFormComponent this.props", this.props);
        if (text !== null && text.length > 0) {
            this.props.getStreetSuggestions(text);
        } else {
            this.props.clearStreetSuggestions();
        }
    }
    render(): JSX.Element {
        console.log("search_input", this.props.search_input);
        return (
            <div className="search-form-component">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        minLength={2}
                        className="form-control p-3"
                        placeholder="Street address..."
                        onChange={event => this.getAutoCompleteDebounced(event.target.value)}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary"
                            type="button"
                        >Search</button>
                    </div>
                </div>
                <AutoCompleteComponent
                    autocomplete={this.props.autocomplete}
                    clearHandler={this.props.clearStreetSuggestions}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: { amenities: IAmenitiesState }) => ({
    search_input: state.amenities.search_input,
    autocomplete: state.amenities.autocomplete
});

export default connect(
    mapStateToProps,
    {getStreetSuggestions, clearStreetSuggestions}
)(SearchFormComponent);
